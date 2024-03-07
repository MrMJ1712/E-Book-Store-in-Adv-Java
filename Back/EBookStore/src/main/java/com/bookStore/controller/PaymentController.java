package com.bookStore.controller;

import com.bookStore.dto.PaymentIntentDto;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostMapping("/create-payment-intent")
    public String createPaymentIntent(@RequestBody PaymentIntentDto paymentIntentDto) {
        Stripe.apiKey = stripeApiKey;

        try {
            PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                    .setCurrency(paymentIntentDto.getCurrency())
                    .setAmount(paymentIntentDto.getAmount())
                    .build();

            PaymentIntent intent = PaymentIntent.create(createParams);
            return intent.toJson();
        } catch (StripeException e) {
            e.printStackTrace();
            return "{ \"error\": \"" + e.getMessage() + "\" }";
        }
    }
}

