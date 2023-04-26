import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuario from "../model/ColecaoUsuario.ts";
import ProvedorCriptografia from "../model/ProvedorCriptografia.ts";
import Usuario from "../model/Usuario.ts";

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
    constructor(
        private colecao: ColecaoUsuario,
        private provedorCriptografia: ProvedorCriptografia
    ) {}

    async executar(usuario: Required<Usuario>): Promise<void> {
        const senhaCriptografada = await this.provedorCriptografia.criptografar(usuario.senha);
        
        const novoUsuario = {...usuario, senha: senhaCriptografada};

        await this.colecao.adicionar(novoUsuario);
    }    
}