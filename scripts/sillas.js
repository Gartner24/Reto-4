const productList = document.getElementById("cat-sillas");

document.addEventListener("DOMContentLoaded", async() => {

    const res = await fetch("https://api-costech.herokuapp.com/sillas/");
    const sillas = await res.json();


    sillas.forEach(sillas => {
        productList.innerHTML += `
        <div class="container-cat">
            <img src="${sillas.imagen}" alt="producto" class="link" id="${sillas.id + " " + sillas.tipo}">
            <br>
            <span class="link">${sillas.name}</span>
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