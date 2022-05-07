

const productList = document.getElementById("cat-audifonos");

document.addEventListener("DOMContentLoaded", async() => {

    const res = await fetch("https://api-costech.herokuapp.com/audifonos/");
    const audifonos = await res.json();


    audifonos.forEach(audifonos => {
        productList.innerHTML += `
        <div class="container-cat">
            <img src="${audifonos.imagen}" alt="producto" class="link" id="${audifonos.id + " " + audifonos.tipo}">
            <br>
            <span class="link">${audifonos.name}</span>
        </div>`;   
    })
})

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link")){
        const id = e.target.id;
        console.log(id);
        localStorage.setItem("idSelect", id);
        window.location.href = "product.html";
    }
})