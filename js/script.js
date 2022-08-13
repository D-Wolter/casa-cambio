const btnPesquisa = document.getElementById('search-button');
const btnSalvar = document.getElementById('save')
const input = document.getElementById('currency-input');
const listCurrencys = document.getElementById('currency-list');

const criarList = (moeda) => {
    const li = document.createElement('li');
    li.innerHTML = `${moeda[0]}: ${moeda[1]}`;
    listCurrencys.appendChild(li);
}

btnSalvar.addEventListener('click', () => {
    const listaSalva = listCurrencys.innerHTML;
    // console.log(listaSalva);
    localStorage.setItem('savedList', listaSalva)
})

btnPesquisa.addEventListener('click', async () => {
    const valorInput = input.value;
    // console.log(valorInput);
    const retorno = await fecthCurrency(valorInput);
    // console.log(retorno.rates);
    const arrayDados = Object.entries(retorno.rates);
    // console.log(arrayDados[0][1]);
    listCurrencys.innerHTML = '';
    arrayDados.forEach((moeda) => {
        // console.log(moeda);
        criarList(moeda);
    });
});

window.onload = () => {
    listCurrencys.innerHTML = localStorage.getItem('savedList') 
}