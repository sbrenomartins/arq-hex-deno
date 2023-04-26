import LoginUsuario from "./core/usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario.ts";
import ColecaoMemoria from "./adapters/ColecaoMemoria.ts";
import RealCriptografia from "./adapters/RealCriptografia.ts";

const colecaoMemoria = new ColecaoMemoria();
const provedorCriptografia = new RealCriptografia();

const registrar = new RegistrarUsuario(colecaoMemoria, provedorCriptografia);
await registrar.executar({
    nome: "João",
    email: "joao@joao.land",
    senha: "123456"
});

const login = new LoginUsuario(colecaoMemoria, provedorCriptografia);
const usuario = await login.executar({
    email: "joao@joao.land",
    senha: "123456"
});

console.log(usuario);