import ProvedorCriptografia from "../core/usuario/model/ProvedorCriptografia.ts";

export default class InverterCriptografia implements ProvedorCriptografia {
    // deno-lint-ignore require-await
    async criptografar(senha: string): Promise<string> {
        return senha.split('').reverse().join('');
    }

    // deno-lint-ignore require-await
    async comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
        return senha.split('').reverse().join('') === senhaCriptografada;
    }
}