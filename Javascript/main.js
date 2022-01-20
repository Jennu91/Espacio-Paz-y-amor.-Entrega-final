class Productos{
    constructor(nombre, _talle, precio){
        this.nombre = nombre;
        this.pesotalle = peso;
        this.precio = precio;        
    }

    mostrarInformacion(){
        console.log("El nombre del producto es "+this.nombre+" el talle es "+this._talle+". "+"Su precio es de "+this.precio+");
    }
    
    ingresoDatos(){
        let nuevoNombre = prompt("Ingrese el nombre del producto");
        this.nombre=nuevoNombre;
        let nuevoTalle = prompt("Ingrese el talle del producto");
        this._talle=nuevoTalle;
        let nuevoPrecio=prompt("Ingrese el precio del producto");
        this.precio=nuevoPrecio;       
    }
}

const productos1=new Productos();
//productos1.ingresoDatos();
//productos1.mostrarInformacion();

const productosArray = [];
let cantidad = prompt("Ingrese la cantidad de productos que desea agregar");

do{
    productos1.ingresoDatos();

    productosArray.push(productos1);
    console.log(productosArray.length);
    productos1.mostrarInformacion();
}while(productosArray.length != cantidad)



