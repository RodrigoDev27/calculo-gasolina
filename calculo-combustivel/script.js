
function calcular(event){
    event.preventDefault();

let alcoolInput = document.getElementById("alcool").value;
let gasolinaInput = document.getElementById("gasolina").value;
let contentResult = document.getElementById ("content-result");
let textResult = document.getElementById("text-result");

let gasolinaSpan = document.getElementById("alcool-result");
let alcoolSpan = document.getElementById("gasolina-result");


   /* Caculo alcool / gasolina
    E se o resultado for menor que 8.7 compensa usar alcool
   
   */

   let calculo = (alcoolInput / gasolinaInput);
    
   if(calculo < 0.7){
    //Aqui compensa usar alcool
    textResult.innerHTML = "Compensa usar Alcool"
   }else{
       //Aqui compensa usar GASOLINA !
       textResult.innerHTML = "Compensa usar Gasolina"
   }

   gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput;
   alcoolSpan.innerHTML = "Álcool R$" + alcoolInput;
  
   contentResult.classList.remove("hide");

}