const list = document.querySelector('ul')
const buttonMostrar = document.querySelector('.mostrar-lanche')
const desconto10 = document.querySelector('.dar-desconto')
const somarTudo = document.querySelector('.valor-total')
const filtrar = document.querySelector('.filtrar')
let myLi = ``

function formatarMoeda(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function mostrarLanche(productsArray) {
    myLi = ``

    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p> ${formatarMoeda(product.price)}</p>
            </li> 
        `
    })

    list.innerHTML = myLi

}

function map() {

    const novoPreço = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.90, //dar 10% de desconto
    }))

    mostrarLanche(novoPreço)
}

function reduce() {

    const soma = menuOptions.reduce((acc, item) => acc + item.price, 0)

    list.innerHTML = ` 
        <li>
            <p>A soma de todos os item do menu é:<br> ${formatarMoeda(soma)}</p>
        </li>
        `
}

function filtrarVeganos() {
    const filtrarVegano = menuOptions.filter(item => item.vegan == true)

    mostrarLanche(filtrarVegano)
}



buttonMostrar.addEventListener("click", () => mostrarLanche(menuOptions))
desconto10.addEventListener('click', map)
somarTudo.addEventListener('click', reduce)
filtrar.addEventListener('click', filtrarVeganos)