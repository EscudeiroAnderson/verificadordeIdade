function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById("txtano")
    var res= document.querySelector("div#res")
   
    if(fano.value.length==0 ||Number (fano.value) > ano){
        alert("Verificar os dados e tente novamente")
    }else{
       
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero=""

        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebemenino.png')
            }else if(idade < 13){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if(idade < 50){
                //homem
                img.setAttribute('src', 'homem.png')                
            }else if(idade < 80){
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
                
            
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebemenina.png')
            }else if(idade < 13){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                //jovem Mulher
                img.setAttribute('src', 'jovem-mulher.png')
            }else if(idade < 50){
                //mulher
                img.setAttribute('src', 'mulher.png')                
            }else if(idade < 80){
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}