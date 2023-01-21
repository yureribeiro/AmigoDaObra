function criarP(text) {
   const divTexto = document.getElementById('res')
    const newText = document.createElement('p')
    newText.innerText = text
    newText.classList = 'pClass'
    divTexto.appendChild(newText) 
    
}

function removeText() {
    const divTexto = document.querySelector('#res') 
    const texto = document.querySelector('#res p') 
    divTexto.removeChild(texto)
    
}


var qpilar = document.getElementById("txtp")  //Quantidade de pilares (und) a 
var qbarra = document.getElementById("txtb") //Quantidade de barras dos pilares (und) b 
var tpilar = document.getElementById("txtt") //Tamanho dos pilares (m) c 
var distestri = document.getElementById("txtd") //Distância dos estribos (m) d 
var dim1 = document.getElementById("txte1") //Dimensão dos estribos (m) 1 e
var dim2 = document.getElementById("txte2") //Dimensão dos estribos (m) 2 f
var diametroPilar = document.querySelector('input[name="ferro"]:checked').value //g

const calcFerroBtn = document.getElementById('calcFerroBtn')
const clean = document.getElementById('clean')


calcFerroBtn.addEventListener('click', function () {
    

    var a = Number(qpilar.value)
    var b = Number(qbarra.value)
    var c = Number(tpilar.value)
    var d = Number(distestri.value)
    var e = Number(dim1.value)
    var f = Number(dim2.value)
    var g = Number(diametroPilar.value)

    
    var quantbpilar = Math.round(((a*b*c)/12)*1.1) 
    var quantbestribos = Math.round(((((a*c)/d)*(e*2+f*2+0.06))/12)*1.1) 

    if(a === 0 || b === 0 || c === 0 || d === 0 || e === 0 || f === 0){
        alert('ERRO: Está faltando dados, complete por favor')
    } else {
        criarP(`A quantidade de barras para pilares: ${quantbpilar} barras
        A quantidade de barras para estribos: ${quantbestribos} barras
        OBS.: As barras são de 12 metros `)   
           
    }    
    console.log(diametroPilar)
   
})

clean.addEventListener('click', function() {
    var qpilar = document.getElementById("txtp").value = '' 
    var qbarra = document.getElementById("txtb").value = ''
    var tpilar = document.getElementById("txtt").value = '' 
    var distestri = document.getElementById("txtd").value = '' 
    var dim1 = document.getElementById("txte1").value = '' 
    var dim2 = document.getElementById("txte2").value = ''
    
    removeText() 

    
})




