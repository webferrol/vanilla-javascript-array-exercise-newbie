window.addEventListener("load",()=>{
//Todo mi código aquí


let array=[];
let elInputArray=document.querySelector("#array");
let sw=false;

const esNumeroEnteroPositivo=numero=>!isNaN(numero) && numero!=="";

const cargarArray=(numero)=>{
  if(esNumeroEnteroPositivo(numero)){
    array.push(Number(numero));
    alert(`Número ${numero} cargado`);
  }else
    alert(`Número " ${numero} " no válido`);
}

const calcularMedia=()=>{
    let ac=0;
    for(let i=0;i<array.length;i++){
        ac+=array[i];
    }
    return ac/array.length;
}


document.querySelector("#b_2").addEventListener("click",()=>{
 
//compruebo si el array ha sido inicializado
 if(array.length===0){//si nunca ha sido cargado intento introducir un valor
 
  cargarArray(elInputArray.value);
  sw=confirm("Desea introducir otro elemento");// después confirmo
  
 }else if(sw){//si fue confirmado 
    cargarArray(elInputArray.value);
    sw=confirm("Desea introducir otro elemento");
 }

 if(array.length && !sw){
  alert(`${array.join("+")}/${array.length}=${calcularMedia()}`);
 }
  
  
  
});


//fin del código
});