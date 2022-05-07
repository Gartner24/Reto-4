const productList = document.getElementById("cat-gadgets");

document.addEventListener("DOMContentLoaded", async() => {

    const res = await fetch("https://api-costech.herokuapp.com/gadgets/");
    const gadgets = await res.json();


    gadgets.forEach(gadgets => {
        productList.innerHTML += `
        <div class="container-cat">
            <img src="${gadgets.imagen}" alt="producto" class="link" id="${gadgets.id + " " + gadgets.tipo}">
            <br>
            <span class="link">${gadgets.name}</span>
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
