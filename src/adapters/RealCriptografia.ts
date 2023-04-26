import * as bcrypt from 'https://deno.land/x/bcrypt@v0.4.1/mod.ts';
import ProvedorCriptografia from '../core/usuario/model/ProvedorCriptografia.ts';

export default class RealCriptografia implements ProvedorCriptografia {
    async criptografar(senha: string): Promise<string> {
        return await bcrypt.hash(senha);
    }

    async comparar(senha: string,senhaCriptografada: string): Promise<boolean> {
        return await bcrypt.compare(senha, senhaCriptografada);
    }
}