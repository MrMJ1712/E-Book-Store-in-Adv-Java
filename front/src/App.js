
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddBook } from './Component/AddBook';
import { AdminPage } from './Component/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutUs } from './Component/AboutUs';
import { PurchaseHistory } from './Component/Purchasehistory';
import { Registration } from './Component/Registration';
import { Login } from './Component/Login';
import { UpdateBook } from './Component/UpdateBook';
import { HomePageBooks } from './Component/HomePageBooks';
import { Address } from './Component/Address';
import { NavigationBar } from './Component/NavigationBar';
import {FooterBar} from './Component/FooterBar';
import { BooksByCategory } from './Component/BooksByCategory';
import OrderConfirm from './Component/OrderConfirm';
import BuyNow from './Component/BuyNow';
import { PurchaseReceipt } from './Component/PurchaseReceipt';
import SpecialOffer from './Component/SpecialOffer';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>     
      <Route path='/add-book' element={<AddBook/>}></Route>    
      <Route path='/adminpage' element={<AdminPage/>}></Route>    
      <Route path='/about-us' element={<AboutUs/>}></Route>    
      <Route path='/homepage' element={<HomePageBooks/>}></Route>
      <Route path='/homepage/buynow/:id' element={<BuyNow/>}></Route>
      <Route path='/purchase-history' element={<PurchaseHistory/>}></Route>
      <Route path='/purchase-receipt/:bookId/:customerId/:quantityId' element={<PurchaseReceipt/>}></Route>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/add-address' element={<Address/>}></Route>
      <Route path='/bookupdate/:id' element={<UpdateBook/>}></Route>
      <Route path='/categoryWiseBook/:category' element={<BooksByCategory/>}></Route>
      <Route path='/specialOffer' element={<SpecialOffer/>}></Route>
    </Routes>
    <FooterBar/>
    </BrowserRouter>
  );
}
export default App;
