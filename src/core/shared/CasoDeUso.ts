export default interface CasoDeUso<In, Out> {
    executar(entrada: In): Promise<Out>;
}