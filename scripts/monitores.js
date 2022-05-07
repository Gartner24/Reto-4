const productList = document.getElementById("cat-monitores");

document.addEventListener("DOMContentLoaded", async() => {

    const res = await fetch("https://api-costech.herokuapp.com/monitores/");
    const monitores = await res.json();

    monitores.forEach(monitores => {
        productList.innerHTML += `
        <div class="container-cat">
            <img src="${monitores.imagen}" alt="producto" class="link" id="${monitores.id + " " + monitores.tipo}">
            <br>
            <span class="link">${monitores.name}</span>
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
