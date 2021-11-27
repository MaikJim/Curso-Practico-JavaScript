//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const pocentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * pocentajePrecioConDescuento) /100;
    return precioConDescuento;
}

/*console.log({precioOriginal,
descuento,
pocentajePrecioConDescuento, 
precioConDescuento});*/

function onClickButtonPriceDiscount() {
    const inputPrice =document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount =document.getElementById("inputDescount");
    const discountValue = inputDiscount.value;

    const precioConDescuento1 = calcularPrecioConDescuento(priceValue,discountValue);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento1
}