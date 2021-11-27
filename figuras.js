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

//Aqui interactuamos con el HTML para calcular el cuadrado  

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

//Calculo del triangulo 
function calcularPerimetroTriangulo() {
    const inputLado1Triangulo = document.getElementById("inputLado1Triangulo");
    const valueLado1Triangulo = inputLado1Triangulo.value;

    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo");
    const valueLado2Triangulo = inputLado2Triangulo.value;

    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const valueBaseTriangulo = inputBaseTriangulo.value;

    const perimetroTriangulo1 = perimetroTriangulo(valueLado1Triangulo,valueLado2Triangulo,valueBaseTriangulo);
    console.log(perimetroTriangulo1);
    alert(perimetroTriangulo1);

}

function calcularAreaTriangulo() {
    
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const valueBaseTriangulo = inputBaseTriangulo.value;

    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const valueAlturaTriangulo = inputAlturaTriangulo.value;

    const areaTriangulo1 = areaTriangulo(valueBaseTriangulo,valueAlturaTriangulo);
    alert(areaTriangulo1);
}

//funciones de los Circulos 
function calcularDiametroCirculo() {
    const inputRadioCirculo =document.getElementById("inputRadioCirculo");
    const valueRadioCirculo = inputRadioCirculo.value;

    const DiamentroCriculo1 = diametroCirculo(valueRadioCirculo);
    alert(DiamentroCriculo1); 
}

function calcularCircunferenciaCirculo() {
    const inputRadioCirculo =document.getElementById("inputRadioCirculo");
    const valueRadioCirculo = inputRadioCirculo.value;

    const CircunferenciaCirculo = perimetroCirculo(valueRadioCirculo);
    alert(CircunferenciaCirculo); 
}

function calcularAreaCirculo() {
    const inputRadioCirculo =document.getElementById("inputRadioCirculo");
    const valueRadioCirculo = inputRadioCirculo.value;

    const AreaCriculo1 = areaCirculo(valueRadioCirculo);
    alert(AreaCriculo1); 
}