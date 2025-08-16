import jwt, { SignOptions } from 'jsonwebtoken';

export const createToken = (
    jwtPayload: { id?: string; phone?: string; email?: string; status?: "active" | "in-active"; role?: string; },
    secret: string,
    // expiresIn: string | number,
    //expiresIn: SignOptions['expiresIn']
) => {
    // const signOptions: SignOptions = {
    //     expiresIn, // now it's typed correctly
    //   };
    // return jwt.sign(jwtPayload, secret, {
    //     expiresIn: expiresIn as string | number,
    // });
    return jwt.sign(jwtPayload, secret, /*signOptions*/);
};
