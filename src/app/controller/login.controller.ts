import { Request, Response } from 'express';
import { login_ } from '../../use-cases/login/login';

class LoginController {
    async login(req: Request, res: Response): Promise<void> {
        const { matricula, pass } = req.body

        if (!matricula || !pass) {
            res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
        }

        const token = login_(matricula, pass)

        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    }

}
export {LoginController}
/*
export const loginController {
    login: (req: Request, res: Response) {
        const { matricula, pass } = req.body

        if (!matricula || !pass) {
            return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
        }

        const token = login(matricula, pass)

        if (token) {

            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    }
}
*/