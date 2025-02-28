function generatenumber(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    if(min<max){
       let result= Math.floor(Math.random() * (max- min + 1)) + min;
        document.querySelector(".result").innerHTML =  result

    }
    else  alert("o valor minimo tem que ser menor que o valor maximo")
}
function recarregarAPagina(){
    window.location.reload();
} 


