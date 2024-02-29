import express from 'express';
import { LoginController } from '../controller/login.controller';

const login_router = express.Router();
const loginControlller = new LoginController();

login_router.post('/login', (req, resp) => loginControlller.login(req, resp));

module.exports = login_router;
export {login_router as router};
