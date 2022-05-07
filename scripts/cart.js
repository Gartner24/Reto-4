const productos = {
    Monitor: "https://api-costech.herokuapp.com/monitores/",
    Teclado: "https://api-costech.herokuapp.com/teclados/",
    Audifono: "https://api-costech.herokuapp.com/audifonos/",
    Gadget: "https://api-costech.herokuapp.com/gadgets/",
    Silla: "https://api-costech.herokuapp.com/sillas/",
}
const cart = document.getElementById("cart");
document.addEventListener("DOMContentLoaded", async () => {
    let arrayOfCart = JSON.parse(localStorage.getItem("arrayOfCart")) || [];
    arrayOfCart.forEach(async (element) => {
        const id = element.id;
        const tipo = element.tipo;
        const precio = element.precio;
        const cantidad = element.cantidad;
        const res = await fetch(productos[tipo] + id);
        const data = await res.json();
        const item7 = document.getElementById("item7");
        

        document.getElementsByClassName(`${data.id}`);
        document.getElementById("borrar");
        document.addEventListener("click", (e) => {
            if(e.target.id === "borrar" && e.target.classList.contains(data.id)){
                const posicionArray = arrayOfCart.indexOf(element);
                arrayOfCart.splice(posicionArray, 1);
                localStorage.setItem("arrayOfCart", JSON.stringify(arrayOfCart));
                window.location.reload();
           }
        })

        const valorTotal = arrayOfCart.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0) 
        

        cart.innerHTML += `
<div class="container-del-carrito">
    <span class="item" id="item1">
        <img src="${data.imagen}">
    </span>
    <span class="item" id="item2">
        <span style="font-weight: bolder;">Producto</span>
        ${data.name}
    </span>
    <span class="item" id="item3">
        <span style="font-weight: bolder;">Marca</span>
        ${data.marca}
    </span>
    <span class="item" id="item4">
        <span style="font-weight: bolder;">Descripcion</span>
        ${data.description}
    </span>
    <span class="item" id="item5">
        <span style="font-weight: bolder;">Precio Unitario</span>
        $<span id="precio">${data.precio}</span>
        <br>
        Cantidad: <span id="cantidad">${cantidad}</span>
        <br>
        Total: <span id="total">$${precio}</span>
    </span>
    <span class="item" id="item6">
        <button class="${data.id}" id="borrar" type="click">Eliminar</button>
    </span>
</div>
<hr>
        `;
item7.innerHTML = `
<span style="font-weight: bolder;">Total: $${valorTotal}</span>`
    });
})

document.addEventListener("click", (e) => {
    if (e.target.id === "ir-al-pago") {
        window.location.href = "./payment.html";
    }
})