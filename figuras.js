//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;

}


function areaCradrado (lado){
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");


function perimetroTriangulo(lado1,lado2,baseT){
    return lado1 + lado2 + baseT;
}


function areaTriangulo (base,altura){
    return (base * altura)/2;
}

console.groupEnd();

//Codigo del circulo
console.group("Circulos");


//Diametro
function diametroCirculo(radio){
    return radio *2;
}


//PI
const PI = Math.PI;
console.log("El PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area
function areaCirculo (radio) {
    return (radio * radio) * PI; 
} 
console.groupEnd();

//Aqui interactuamos con el HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCradrado(value);
    alert(area);
}
