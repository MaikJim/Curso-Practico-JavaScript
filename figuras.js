//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;

}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCradrado (lado){
    return lado * lado;
}
//console.log("El area de mi cuadrado es: " + areaCradrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);*/
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1,lado2,baseT){
    return lado1 + lado2 + baseT;
}
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo (base,altura){
    return (base * altura)/2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cm");
console.groupEnd();

//Codigo del circulo
console.group("Circulos");

//Radio
//const radioCirculo =4;
//console.log("El radio del circulo es: " + radioCirculo +"cm");

//Diametro
function diametroCirculo(radio){
    return radio *2;
}
//console.log("El diametro del circulo es: " + diametroCirculo +"cm");

//PI
const PI = Math.PI;
console.log("El PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo +"cm");

//Area
function areaCirculo (radio) {
    return (radio * radio) * PI; 
} 
console.groupEnd();
