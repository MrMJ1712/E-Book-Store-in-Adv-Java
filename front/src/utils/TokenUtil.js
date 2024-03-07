export function isAuthenticated(){
    return (getToken() && getUser()&& getId()) ? true : false;
}

export function getToken(){
    return sessionStorage.getItem("jwt");
}

export function getUser(){
    return sessionStorage.getItem("roles");
}
export function getId(){
    return sessionStorage.getId("id");
}

export function logout(){
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("id");
}

