///EJERCICIO 1

let litrosProducidos;
let precioTotal;

let galonesVendidos = Number(prompt("Ingrese la cantidad de Galones vendidos"));
let precioGalon = Number(prompt("Ingrese el precio del galon"))

precioTotal=galonesVendidos*precioGalon;
litrosProducidos= galonesVendidos*3.785;

console.log("___________________________________________");
console.log("litros vendidos : " + litrosProducidos)
console.log("Total galones vendidos : " + galonesVendidos);
console.log("Total : " + precioTotal);
console.log("___________________________________________");

///EJERCICIO 2

let precioAmbSimple=20;
let precioAmbDoble=25;
let precioAmbTriple =28;
let precTotal;

console.log("La amburguesa puede ser SIMPLE, DOBLE o TRIPLE");
let tipoAmbur = prompt("Indique el tipo de amburguesa : ");
let cantidad = Number(prompt("Cantidad : "));

if(tipoAmbur == "SIMPLE"){
    precTotal= cantidad*precioAmbSimple;
}else if(tipoAmbur == "DOBLE"){
    precTotal = cantidad*precioAmbDoble;
}else{
    precTotal = cantidad*precioAmbTriple;
}

console.log("___________________________________________");
console.log("Precio de la amburguesa : " + precioAmbSimple);
console.log("Cargo por el uso de la tarjeta : " + precTotal*0.05);
console.log("Precio total sin cargo : " + precTotal);
console.log("Precio Total : " + precTotal*1.05);
console.log("___________________________________________");






////EJERCICIO 3
let matriz=[];

for(let i =0; i<3;i++){
    matriz[i][0]=prompt("Ingrese tipo de producto : ");
    matriz[i][1]=Number(prompt("Ingrese la cantidad de productos : "));
}







