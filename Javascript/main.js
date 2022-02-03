class Productos{
    constructor(nombre, talle, precio){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;        
    }

    mostrarInformacion(){
        console.log("El nombre del producto es "+this.nombre+" el talle es "+this.talle+". "+"Su precio es de "+this.precio);
    }
    
    ingresoDatos(){
        let nuevoNombre = prompt("Ingrese el nombre del producto");
        this.nombre=nuevoNombre;
        let nuevoTalle = prompt("Ingrese el talle del producto");
        this.talle=nuevoTalle;
        let nuevoPrecio=prompt("Ingrese el precio del producto");
        this.precio=nuevoPrecio;       
    }
}

const productosArray = [];
let cantidad = prompt("Ingrese la cantidad de productos que desea agregar");

while(productosArray.length < cantidad){
    const producto = new Productos();
    producto.ingresoDatos();
    console.log('productos ingresados');
    productosArray.push(producto);
    console.log(productosArray.length);
    producto.mostrarInformacion();
    console.log(productosArray)
}



