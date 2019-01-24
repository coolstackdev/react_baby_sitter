import { LOGIN_REQUEST } from './types';

export const loginRequest = user => ({
    type: LOGIN_REQUEST,
    user
});

export default loginRequest;

