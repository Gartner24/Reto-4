const completeName = document.getElementById("name")
const email = document.getElementById("email")
const ccn = document.getElementById("ccn")
const monthYear = document.getElementById("month-year")
const cvv = document.getElementById("cvv")
const button = document.getElementById("btn")
const infoPago = document.getElementById("info-pago")

document.addEventListener("DOMContentLoaded", () => {
    const arrayOfCart = JSON.parse(localStorage.getItem("arrayOfCart"));
    const cantidadDeProductos = arrayOfCart.length;
    const valorTotal = arrayOfCart.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0) 
    if (arrayOfCart) {
        infoPago.innerHTML = `
            <span>
                Cantidad de Productos: ${cantidadDeProductos}
                <br>
                Precio total: $${valorTotal}
            </span>
        `
    }
})


document.addEventListener('submit', (e) => {
    e.preventDefault()
    let objectOfData = {
        name: completeName.value,
        email: email.value,
        ccn: ccn.value,
        monthYear: monthYear.value,
        cvv: cvv.value
    }
    if (completeName.value === '' || email.value === '' || ccn.value === '' || monthYear.value === '' || cvv.value === '') {

        Swal.fire('Por Favor Ingresa Todos Los Campos')
    } else {
        localStorage.removeItem("arrayOfCart");
        localStorage.setItem("objectOfData", JSON.stringify(objectOfData));
        Swal.fire('Pago Realizado Satisfactoriamente');
    }
})