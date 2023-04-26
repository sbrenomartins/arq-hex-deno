import ColecaoUsuario from "../core/usuario/model/ColecaoUsuario.ts";
import Usuario from "../core/usuario/model/Usuario.ts";

export default class ColecaoMemoria implements ColecaoUsuario {
    static readonly usuarios: Usuario[] = [];

    // deno-lint-ignore require-await
    async adicionar(usuario: Usuario): Promise<void> {
        ColecaoMemoria.usuarios.push(usuario);
    }

    // deno-lint-ignore require-await
    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return ColecaoMemoria.usuarios.find(u => u.email === email) ?? null;
    }
}