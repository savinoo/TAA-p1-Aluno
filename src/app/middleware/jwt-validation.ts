import jwt, { VerifyOptions } from 'jsonwebtoken';

const jwtSecret: string = 'sua_chave_secreta';

// Interface para o payload do token JWT
interface JwtPayload {
    matricula: string;
    pass: string;
}

export function generateToken(user: JwtPayload): string {
    const payload: JwtPayload = {
        matricula: user.matricula,
        pass: user.pass,
    };

    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Token expira em 1 hora
}

// Função para verificar e decodificar um token JWT
export function verifyToken(token: string): JwtPayload | null {
    const options: VerifyOptions = {
        algorithms: ['HS256'],
    };

    try {
        const decoded = jwt.verify(token, jwtSecret, options) as JwtPayload;
        return decoded;
    } catch (err) {
        return null; // Retorna null se o token for inválido ou expirado
    }
}