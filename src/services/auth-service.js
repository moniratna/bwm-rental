import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';


class AuthService {

tokenKey = "auth_token";

getToken() {
    return localStorage.getItem(this.tokenKey);
}
decode(token){
    return jwt.decode(token);
}
saveToken(token){
    localStorage.setItem(this.tokenKey, token);
}
invalidateUser(){
    localStorage.removeItem(this.tokenKey);
}
getExpiration(token){
    const exp = this.decode(token).exp;
    return moment.unix(exp);
}
isvalid(token) {
    return moment().isBefore(this.getExpiration(token));

}
isAuthenticated(){
    const token = this.getToken();
    return (token && this.isvalid(token)) ? true : false;
}
}

export default new AuthService();