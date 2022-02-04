class Sucursales{
    constructor(nombre, ubicacion){
        this.nombre = nombre;
        this.ubicacion = ubicacion;        
    }

    mostrarInformacion(){
        console.log("El nombre de la sucursal es " + this.nombre+ " y su ubicacion es "+this.ubicacion+".");
    }
    
    ingresoDatos(){
        let nuevoNombre = prompt("Ingrese el nombre de la sucursal");
        this.nombre=nuevoNombre;
        let nuevaUbicacion = prompt("Ingrese la ubicacion de la sucursal");
        this.ubicacion=nuevaUbicacion;      
    }
}

const sucursalesArray = [];
let cantidad = prompt("Ingrese la cantidad de sucursales que desea agregar");

while(sucursalesArray.length < cantidad){
    const sucursal = new Sucursales();
    sucursal.ingresoDatos();
    sucursalesArray.push(sucursal);
    console.log(sucursalesArray.length);
    sucursal.mostrarInformacion();
    console.log(sucursalesArray)
}

let etiquetaSucursales = document.querySelector(".sucursales");

for(let i = 0; i < cantidad; i++){
    let codigo = `<li>${sucursalesArray[i].ubicacion}</li>`;
    etiquetaSucursales.innerHTML += codigo;
}





