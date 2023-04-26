import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuario from "../model/ColecaoUsuario.ts";
import ProvedorCriptografia from "../model/ProvedorCriptografia.ts";
import Usuario from "../model/Usuario.ts";

export type LoginUsuarioDto = {
    email: string;
    senha: string;
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioDto, Usuario | null> {
    constructor(
        private colecao: ColecaoUsuario,
        private provedorCriptografia: ProvedorCriptografia
    ) {}

    async executar(dto: LoginUsuarioDto): Promise<Usuario | null> {
        const usuario = await this.colecao.buscarPorEmail(dto.email);
        if (!usuario) return null;

        const saoIguais = await this.provedorCriptografia.comparar(dto.senha, usuario.senha!);
        if (!saoIguais) return null;

        return {
            nome: usuario.nome,
            email: usuario.email
        }
    }
}