import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';


class AuthService {
getToken() {
    return localStorage.getItem('auth_token');
}
decode(token){
    return jwt.decode(token);
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