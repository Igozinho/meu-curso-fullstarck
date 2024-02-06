let urlprodutos =  "https://raw.githubusercontent.com/Igozinho/meu-curso-fullstarck/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Consumir%20API/produtos.json"

async function procurar(){
    let respota = await fetch(urlprodutos)
    let ponu = await respota.json()
    console.log(ponu)

    for (let respota in ponu){
        //document.body.innerHTML += "<h1 class='titulo'>" +  ponu[respota].nome + "</h1>"    //metodo - 01
        //document.body.innerHTML += `<h1 class='titulo'> ${ponu[respota].nome}  </h1>`      //metodo - 02
        document.body.innerHTML += `
        <p class='titulo'>
        ${ponu[respota].nome}
        </p>
        <img
        src="${ponu[respota].img}"
        alt=""
        width="auto"
        height="250"
        >
        `
    }
    
}

procurar()