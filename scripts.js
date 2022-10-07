const button = document.getElementById("button-calcular")
const selectDe = document.getElementById("select-converter-de")
const selectPara = document.getElementById("select-converter-para")

const dolar = 5.21
const euro = 5.08
const bitcoin = 100956.42
const real = 1

const equalSelects = () => {

    if(selectPara.value === selectDe.value){
        
        alert('Favor trocar a Moeda')
    }
}

const convertValues = () => { 
    const input = document.getElementById("initial-input").value
    const initialValue = document.getElementById("initial-value")
    const targetCurrencyValue = document.getElementById('target-currency-value')
        
    if(selectPara.value === '$ Dólar Americano' && selectDe.value === 'R$ Real'){
        initialValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', 
            currency: 'BRL' }
            ).format(input)
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format((input * real) / dolar);
    }

    if(selectPara.value === '$ Dólar Americano' && selectDe.value === '€ Euro'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'EUR' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format((input * euro) / dolar);
    }

    if(selectPara.value === '$ Dólar Americano' && selectDe.value === '₿ Bitcoin'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'BTC' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format((input * bitcoin) / dolar);
    }

    if(selectPara.value === '€ Euro' && selectDe.value === 'R$ Real'){
        initialValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', 
            currency: 'BRL' }
            ).format(input)
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
            ).format((input * real) / euro);
    }

    if(selectPara.value === '€ Euro' && selectDe.value === '₿ Bitcoin'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'BTC' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
            ).format((input * bitcoin) / euro);
    }

    if(selectPara.value === '€ Euro' && selectDe.value === '$ Dólar Americano'){
        initialValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
             currency: 'EUR' }
            ).format((input * dolar) / euro);
    }

    if(selectPara.value === '₿ Bitcoin' && selectDe.value === 'R$ Real'){
        initialValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', 
            currency: 'BRL' }
            ).format(input)
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
             currency: 'BTC' }
            ).format(input * real / bitcoin);
        }

    if(selectPara.value === '₿ Bitcoin' && selectDe.value === '$ Dólar Americano'){
        initialValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'BTC' }
            ).format((input * dolar )/ bitcoin);
        }

    if(selectPara.value === '₿ Bitcoin' && selectDe.value === '€ Euro'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'EUR' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'BTC' }
            ).format((input * euro)/ bitcoin);
        }

    if(selectPara.value === 'R$ Real' && selectDe.value === '$ Dólar Americano'){
        initialValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency',
            currency: 'USD' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
            ).format((input * dolar) / real);
    }
    if(selectPara.value === 'R$ Real' && selectDe.value === '€ Euro'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'EUR' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
            ).format((input * euro) / real);
    }
    if(selectPara.value === 'R$ Real' && selectDe.value === '₿ Bitcoin'){
        initialValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
            currency: 'BTC' }
            ).format(input);
        targetCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
            ).format((input * bitcoin) / real);
    }

}
const changeValueDE = () => {
    const initialCurrency = document.getElementById('initial-currency')
    const initialCurrencyValue = document.getElementById('initial-value')
    const initialImg = document.getElementById('initial-img')
    
    if(selectDe.value === '$ Dólar Americano') {
        initialCurrencyValue.innerHTML = '$'
        initialCurrency.innerHTML = 'Dólar Americano'
        initialImg.src = "./assets/eua.jpg"
    }
    if(selectDe.value === '€ Euro') {
        initialCurrencyValue.innerHTML = '€'
        initialCurrency.innerHTML = 'Euro'
        initialImg.src = "./assets/euro.png"
    }
    if(selectDe.value === '₿ Bitcoin') {
        initialCurrencyValue.innerHTML = 'BTC'
        initialCurrency.innerHTML = 'Bitcoin'
        initialImg.src = "./assets/bitcoin.png"
    }
    if(selectDe.value === 'R$ Real') {
        initialCurrencyValue.innerHTML = 'R$'
        initialCurrency.innerHTML = 'Real'
        initialImg.src = "./assets/brasil.png"
    }
    convertValues ()
    equalSelects ()
}


const changeValuePara = () => {
    const targetCurrency = document.getElementById('target-currency')
    const targetImg = document.getElementById('target-img')
    
    if(selectPara.value === '$ Dólar Americano') {
        targetCurrency.innerHTML = 'Dólar Americano'
        targetImg.src = "./assets/eua.jpg"
    }
    if(selectPara.value === '€ Euro') {
        targetCurrency.innerHTML = 'Euro'
        targetImg.src = "./assets/euro.png"
    }
    if(selectPara.value === '₿ Bitcoin') {
        targetCurrency.innerHTML = 'Bitcoin'
        targetImg.src = "./assets/bitcoin.png"
    }
    if(selectPara.value === 'R$ Real') {
        targetCurrency.innerHTML = 'Real'
        targetImg.src = "./assets/brasil.png"
    }
    convertValues ()
    equalSelects ()
}


button.addEventListener('click', convertValues)
selectPara.addEventListener('change', changeValuePara)
selectDe.addEventListener('change', changeValueDE)