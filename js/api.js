const endPoint = 'https://api.exchangerate.host/latest?base=';

const fecthCurrency = (moeda) => {
    const caminho = `${endPoint}${moeda}`;
    return fetch(caminho)
    .then((resposta) => resposta.json())
    .then((dados) => dados)
    .catch((erro) => erro);
    
}

const fecthCurrencyAsyncAwait = async (moeda) => {
    try {
        const caminho = `${endPoint}${moeda}`;
        const resultado = await fetch(caminho);
        const resultadoJson = await resultado.json();
        // console.log(resultadoJson);
        return resultadoJson;
    } catch (error) {
        return error;
    }

}


