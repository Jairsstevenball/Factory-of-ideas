const carrusel = document.querySelector(".carrusel"),
flechasIconos = document.querySelectorAll(".contenido i");
var imagenes=['assets/Perfume a.png','assets/Perfume b.png','assets/Perfume r.png','assets/Perfume v.png','assets/Perfume mo.png','assets/Perfume am.png']

img1 = carrusel.querySelectorAll("img")[0],
img2 = carrusel.querySelectorAll("img")[1],
img3 = carrusel.querySelectorAll("img")[2];

moverNext=()=>{
    var primerElemento=imagenes[0];
    arrayTemp=imagenes.slice(1,imagenes.length);
    arrayTemp[imagenes.length-1]=primerElemento;
    imagenes= arrayTemp;
    console.log( arrayTemp)
    img1.src=imagenes[0];
    img2.src=imagenes[1];
    img3.src=imagenes[2];
}

moverPrev=()=>{
    var arrayTemp=[];
    arrayTemp[0]=imagenes[imagenes.length-1];
    for(let i=0; i<imagenes.length; i++){
        if (i>=1){
            arrayTemp[i] = imagenes[i-1];

        }
    }
    
    imagenes = arrayTemp;
    console.log(imagenes)
    img1.src=imagenes[0];
    img2.src=imagenes[1];
    img3.src=imagenes[2];


}


moverNextAndBack = (icon)=>{
   
    if (document.querySelectorAll(".contenido i")[0] == icon){
        moverPrev(); 
    }else if(document.querySelectorAll(".contenido i")[1] == icon){
        moverNext();  
    }

}


flechasIconos.forEach(icon=>{
    icon.addEventListener("click", ()=>{
       moverNextAndBack(icon);
    });

});



setInterval(function(){
    moverNext();  
},2000);

