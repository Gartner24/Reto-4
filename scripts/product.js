const page = document.getElementById("data");
let form = document.querySelector('form');
const cantidadProductosCarrito = document.getElementById("cantidadProductosCarrito");
let formulario = document.getElementById("formulario");
const productSelect = localStorage.getItem("idSelect");
// id y tipo del producto
const id = productSelect.slice(0, 1);
const tipo = productSelect.slice(2);

const cantidadDelProducto = document.getElementById("cantidad-del-producto");

const productos = {
    Monitor: "https://api-costech.herokuapp.com/monitores/",
    Teclado: "https://api-costech.herokuapp.com/teclados/",
    Audifono: "https://api-costech.herokuapp.com/audifonos/",
    Gadget: "https://api-costech.herokuapp.com/gadgets/",
    Silla: "https://api-costech.herokuapp.com/sillas/",
}

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch(productos[tipo] + id);
    const data = await res.json();

    page.innerHTML += `
    <div class="container-producto">
        <div class="row-0">
            <span><img src="${data.imagen}"></span>
        </div>
        <div class="row-1">
            <span style="font-weight: bolder;">
                ${data.name}Monitor
            </span>
        </div>
        <div class="row-2">
            <span>
                <p style="font-weight: bolder;">
                    Marca
                </p>
                ${data.marca}
            </span>
        </div>
        <div class="row-3">
            <span>
                <p style="font-weight: bolder;">
                    Descripcion del producto:
                </p>
                ${data.description}
            </span>
        </div>
        <div class="row-4">
            <span>
                <p style="font-weight: bolder;">
                    Precio:
                </p>
                $${data.precio}
            </span>
        </div>        
    </div>
    `;
    
})

form.addEventListener("click", async (e) => {
    e.preventDefault()
    if (e.target.classList.contains("submit")) {
        const res = await fetch(productos[tipo] + id);
        const data = await res.json();
        let arrayOfCart = JSON.parse(localStorage.getItem("arrayOfCart"))||[];
        let productoCantidad = {
            id:id,
            tipo:tipo,
            cantidad:cantidadDelProducto.value,
            precio:Number(data.precio) * cantidadDelProducto.value
        };
        
        arrayOfCart.push(productoCantidad);
        localStorage.setItem("arrayOfCart", JSON.stringify(arrayOfCart));
    }
})
