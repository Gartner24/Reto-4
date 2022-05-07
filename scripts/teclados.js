const productList = document.getElementById("cat-teclados");

document.addEventListener("DOMContentLoaded", async() => {

    const res = await fetch("https://api-costech.herokuapp.com/teclados/");
    const teclados = await res.json();


    teclados.forEach(teclados => {
        productList.innerHTML += `
        <div class="container-cat">
            <img src="${teclados.imagen}" alt="producto" class="link" id="${teclados.id + " " + teclados.tipo}">
            <br>
            <span class="link">${teclados.name}</span>
        </div>`;   
    })
})

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link")){
        const id = e.target.id;
        localStorage.setItem("idSelect", id);
        window.location.href = "product.html";
    }
})