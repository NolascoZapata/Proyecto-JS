function Productos(id, nombre, precio, tipo, stock, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.stock = stock;
    this.imagen = imagen;
}
var prod = [];
const conteoProd = (item) => {
    prod.push(item)
}
const prod_1 = new Productos("1", "Conjunto 1", '$2500', "0-3 meses", 1, 'img/bebes/bebes31.jpeg');
conteoProd(prod_1);
const prod_2 = new Productos("2", "Conjunto 2", '$3500', "0-3 meses", 1, 'img/bebes/bebes32.jpg');
conteoProd(prod_2);
const prod_3 = new Productos("3", "Conjunto 3", '$3500', "0-3 meses", 1, 'img/bebes/bebes33.jpg');
conteoProd(prod_3);
const prod_4 = new Productos("4", "Pijama para bebé varón", '$1800', "6-9 meses", 1, 'img/bebes/bebes61.jpeg');
conteoProd(prod_4);
const prod_5 = new Productos("5", "Pijama para bebé varón", '$2000', "6-9 meses", 1, 'img/bebes/bebes62.jpg');
conteoProd(prod_5);
const prod_6 = new Productos("6", "Pijama para bebé nena", '$2000', "6-9 meses", 1, 'img/bebes/bebes63.jpg');
conteoProd(prod_6);
const prod_7 = new Productos("7", "Conjunto para bebé", '$3500', "9-12 meses", 1, 'img/bebes/bebes91.jpg');
conteoProd(prod_7);
const prod_8 = new Productos("8", "Conjunto para bebé nena", '$3000', "9-12 meses", 1, 'img/bebes/bebes92.jpg');
conteoProd(prod_8);


const productosEnLocal = (id, valor) => { localStorage.setItem(id, valor) };

for (const item of prod) {
    productosEnLocal('Identificacion del producto'+ item.id, JSON.stringify(item));
}


// encabezado
const portada = new Image();
portada.setAttribute('src', 'img/paginainicio.jpeg');
portada.className = 'img-portada';
document.querySelector('header').append(portada);


//section0 = seccion con imagen y titulo de pagina
const section0 = document.createElement('section');
section0.className = 'img-title';
document.querySelector('main').append(section0);

//imagen portada
let img_titulo = new Image();
img_titulo.setAttribute('src', 'img/bebes/portada-bebes.jpg');
img_titulo.className = 'card-img';
document.querySelector('section').append(img_titulo);

//titulo pagina
let titulo = document.createElement('h1');
titulo.textContent = "Ropa para Bebés";
titulo.className = 'cat-name';
document.querySelector('section').append(titulo);


//section1= seccion de productos
const section1 = document.createElement('section');
section1.className = 'section1';
document.querySelector('main').append(section1);

const div_prod = document.createElement('div');
div_prod.className = 'div_prod';
document.querySelector('.section1').append(div_prod);

//---------------------------------------------------------------------

const carrito= document.createElement('section');
carrito.className='carrito'
document.querySelector('main').append(carrito)

const carrito_flotante = document.createElement('div');
carrito_flotante.className='carrito-flotante';
carrito_flotante.innerHTML = `
<i class="fas fa-shopping-cart fa-2x carrito-logo" id="abrir"></i>
`

document.querySelector('.carrito').append(carrito_flotante);


// contenedor carrito
const contenedor_carrito = document.createElement('div');
contenedor_carrito.className = 'contenedor-carrito';
document.querySelector('.carrito').append(contenedor_carrito);


//Titulo carrito
let nombreCarrito = document.createElement('h3');
nombreCarrito.textContent = "Carrito";
nombreCarrito.className = 'titulo-carrito';
contenedor_carrito.append(nombreCarrito);

//Icono para cerrar carrito
let cerrarCarrito = document.createElement('div');
cerrarCarrito .innerHTML=`<i class="fas fa-times cerrarCarrito" id="cerrar"></i>`
contenedor_carrito.append(cerrarCarrito);

//Columnas carrito
const columnasCarrito = document.createElement('div')
let divisionesCarrito =
`<div class="row columnas">
    <div class="col-6">
        <div>        
            <p>Producto</p>
        </div>
    </div>
    <div class="col-2">
        <div>
            <p>Precio</p>
        </div>
    </div>
    <div class="col-4">
        <p>Cantidad</p>
    </div>
</div>`

columnasCarrito.innerHTML= divisionesCarrito;
contenedor_carrito.append(columnasCarrito);

//Prodcutos en Carrito
const prodEnCarrito = document.createElement('div');
prodEnCarrito.className = 'prod-en-carrito';
document.querySelector('.contenedor-carrito').append(prodEnCarrito);

//-----------------------------------------------------
//total carrito 
const totalCarrito = document.createElement('div');
totalCarrito.className = 'total-carrito';
document.querySelector('.contenedor-carrito').append(totalCarrito);

//Monto a pagar
let montoTotal = document.createElement('p');
totalCarrito.append(montoTotal);
montoTotal.textContent = "Toltal: $0";
montoTotal.className = 'monto-total';

//boton comprar
let comprar = document.createElement('button');
comprar.textContent = "Comprar";
comprar.className = 'btn comprar';
contenedor_carrito.append(comprar);

//Productos en section1 
prod.forEach((item) => { // para cada elemento del array prod, a crear una tarjeta

    let card = document.createElement('div');
    card.className = 'card'; // crea tarjeta

    let img = new Image();
    img.setAttribute('src', item.imagen);
    img.width = 150;
    img.height = 150;
    img.className = 'img';
    card.append(img) // agrega una imagen dentro de la tarjeta

    let nombre = document.createElement('p');
    nombre.textContent = item.nombre;
    nombre.className = 'nombre';
    card.append(nombre); // agrega el nombre del producto dentro de la tarjeta

    let precio = document.createElement('p');
    precio.textContent = item.precio;
    precio.className = 'precio';
    card.append(precio); // agrega el precio del producto dentro de la tarjeta

    let agregar = document.createElement('button');
    agregar.textContent = "Agregar al carrito";
    agregar.className = 'agregar';
    card.append(agregar); // agrega el boton "agregar al carrito" del producto dentro de la tarjeta

    div_prod.append(card);

});

//

//boton agregar al carrito
const botonAgregar = document.querySelectorAll('.agregar');

botonAgregar.forEach(boton => {
    $(boton).click(seleccionProd) // por cada vez que se haga click que ejecute la funcion agregarEnCarrito
    
})

const botonComprar = $('.comprar');

$(botonComprar).click(compraRealizada)  



const contProdCarrito = document.querySelector('.prod-en-carrito'); //selecciono el contenedor de productos en carrito




//funcion seleccionProd
function seleccionProd(event) {
    const boton = event.target; // el elemento seleccionado con el evento lo llamo boton
    const item = boton.closest('.card'); //selecciona al elemento mas cercano  a boton con la clase (.card), por lo tanto selecciona el div que contiene al prodcuto
    const itemNombre = item.querySelector('.nombre').textContent; //selecciona al elemento dentro de item con la clase (.nombre) y extrae el texto   
    const itemPrecio = item.querySelector('.precio').textContent; //selecciona al elemento dentro de item con la clase (.precio) y extrae el texto 
    const itemImagen = item.querySelector('.img').src; //selecciona al elemento dentro de item con la clase (.im) y extrae la imagen

    agregarEnCarrito(itemNombre, itemPrecio, itemImagen);

}

//funcion agregar al carrito 
function agregarEnCarrito(itemNombre, itemPrecio, itemImagen) {
    swal(`Agregando al carrito ${itemNombre}`,"", "success" );
    
    const array_nombres_prod_carrito = contProdCarrito.getElementsByClassName('nombre_prod'); // array con nombres de prodcutos

    for (let index = 0; index < array_nombres_prod_carrito.length; index++) { //para evitar la repeticion 

        //busco la cantidad
        if (array_nombres_prod_carrito[index].innerText === itemNombre) {
            let canti = array_nombres_prod_carrito[index].parentElement.parentElement.parentElement.parentElement.querySelector('.cantidad');
            // a partir del h6 que contiene el nombre subo 3 niveles hasta .compra y desde .compra selecciono el input de la cantidad

            canti.value++; // por cada vez que se repite el nombre del producto seleccionado, cant aumenta de a uno
            
            actualizarTotal();

            return;
        }
        
        
    }


    const listaProdEnCarrito = document.createElement('div');
    const contCompra = `
<div class="row compra">
    <div class="col-6">
        <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${itemImagen} width=50px >
            <h6 class="nombre_prod">${itemNombre}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="precio mb-0">${itemPrecio}</p>
        </div>
    </div>
    <div class="col-4">
        <div class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="cantidad" type="number" value= "1">
            <div class=" btn-eliminar"><i class="far fa-trash-alt btn-trash"></i></div>
        </div>
    </div>
</div>`
    listaProdEnCarrito.innerHTML = contCompra;
    contProdCarrito.append(listaProdEnCarrito);

    $(listaProdEnCarrito.querySelector('.btn-eliminar')).click(eliminarProducto);
    $(listaProdEnCarrito.querySelector('.cantidad')).change (cambiarCantidad);
    
    actualizarTotal()

    localStorage.setItem(`Se seleccionó ${itemNombre}`, `${itemPrecio}`)
}




//funcion actualizar el precio 
function actualizarTotal() {
    let total = 0;
    const totalCarrito = document.querySelector('.monto-total');
    const itemsCompra = document.querySelectorAll('.compra');

    itemsCompra.forEach((compra) => {
        const precioItem = Number(compra.querySelector('.precio').textContent.replace('$', ''));
        const cantidad = Number(compra.querySelector('.cantidad').value)

        total = total + precioItem * cantidad
    })

    totalCarrito.innerHTML = `Total: $${total}`
    

}

//funcion eliminar producto y actualizar total
function eliminarProducto(event) {
    const botonEliminar = event.target;
    botonEliminar.closest('.compra').remove() ;
    actualizarTotal()
    
}

//cambiar cantidad y actualizar total
function cambiarCantidad(event) {
    const cant = event.target;
    if (cant.value <= 0) {
        cant.value = 1;
    }
    actualizarTotal();
}


//Compra realizada 
function compraRealizada(){
    if (montoTotal.textContent == "Toltal: $0") {
        swal({
            title: "El carrito está vacío",
            icon: "warning",
            
        })
    } else {
        swal({
            title: `Realizar compra por ${document.querySelector('.monto-total').textContent.replace("Total:","")}?`,
            icon: "warning",
            buttons: ["Si, Realizar la compra","No, cancelar la compra"],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
            swal("Compra cancelada", {
                icon: "error",
            });
            } else {
            swal({
                title:`Se a efectuado la compra por ${document.querySelector('.monto-total').textContent.replace("Total:","")}, Muchas gracias!`,
                icon: "success",
                
            });
            contProdCarrito.innerHTML="";
            actualizarTotal();
            let comprasAnteriores = Number(localStorage.getItem('Cantidad de compras realizadas:'))
            compras = comprasAnteriores+1
            localStorage.setItem('Cantidad de compras realizadas:',compras)
            }
        });
    }
    
    
    
    
    
    
;}




//Abrir y cerrar carrito

const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');

$(abrir).click(()=>{
    contenedor_carrito.classList.add('show');
    
})
$(cerrar).click(()=>{

    contenedor_carrito.classList.remove('show');
})



//tabla proveedores

const proveedoresTabla= document.createElement('section');
proveedoresTabla.className="prov-tabla"
document.querySelector('main').append(proveedoresTabla);

let btnProv = document.createElement('button');
btnProv.textContent = "Nuestros proveedores";
btnProv.id = 'btn-prv';
proveedoresTabla.append(btnProv);

let listaTitleProv = document.createElement('div');
listaTitleProv.className='tit-prov row columnas'
proveedoresTabla.append(listaTitleProv)

let listaProv = document.createElement('div');
listaProv.id='res';
listaProv.className='list-prov row columnas'
proveedoresTabla.append(listaProv);

listaTitleProv.innerHTML=`
<div class="col-6 tit-bloc text-white">
    <div>        
        <p>Proveedor</p>
    </div>
</div>
<div class="col-6 tit-bloc text-white">
    <div>
        <p>Estacion</p>
    </div>
</div>`



$('#btn-prv').click(function (e) { 
    e.preventDefault();
    $('#res').html(" ");
    $.get("proveedores.json",function(data){
        $.each(data, function (index, item) { 
            $('#res').html($('#res').html()+`

            <div class="col-6">
                <div>
                    <p>${item.proveedor}</p>
                </div>
            </div>
            <div class="col-6">
                <div>
                <p>${item.estacion}</p>
                </div>
            </div>

            `);
        });
    });
});

$(btnProv).click(()=>{
    listaTitleProv.classList.add('show');
    listaProv.classList.add('show')
    
})

// Ubicacion
function ubicacionLocal(){
    var coordenadas = {lat:-24.772130 ,lng: -65.412865};
    var mapa = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coordenadas
    });
    var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    });
}