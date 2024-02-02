async function qualquerum(){
    let resposta = await fetch("pescaria.txt")
    let convertido = await resposta.text ()
    console.log(convertido)


}

qualquerum()