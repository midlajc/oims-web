import api from './api';
class UserService {
    getPublicContent() {
        return api.get('/test/all');
    }
    getUserBoard() {
        return api.get('/test/user');
    }
    getModeratorBoard() {
        return api.get('/test/mod');
    }
    getAdminBoard() {
        return api.get('/test/admin');
    }
    test(){
        return api.get('/')
    }
}
export default new UserService();
