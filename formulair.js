function verifierNum(N){
    const ExpReg=/^[1-9]+$/;
    return ExpReg.test(N) ;
}
const nTel=document.getElementById("nTel");
nTel.addEventListener("blur", f1 )
function f1(){
    
    const longueurSaisie = nTel.value.length;

    if (longueurSaisie !== 8) {
      
        alert("Le numéro de téléphone doit contenir 8 chiffres.");
        nTel.value="";
    } 
    if (!/^[0-9]+$/.test(nTel.value)) {
        alert("Le numero doit contenir uniquement des chiffres.");
        nTel.value = "";
        
      }
      
  
  };

 


  


  function verifierLettre(ch){
    const ExpReg=/^[a-zA-Z]+$/;
    return ExpReg.test(ch) ;
}

const nom=document.getElementById("nom");
nom.addEventListener("blur", f3 )


function f3(){
    
    if  (verifierLettre( nom.value)==true) {
        nom.value =  nom.value.toUpperCase();
      
      
    } else {
        
        alert("Le nom doit contenir des lettre uniquement");
        nom.value="";
      
    }
    
  };


const prenom=document.getElementById("prenom");
prenom.addEventListener("blur", f2 )
function f2(){
    

    
        if  (verifierLettre( prenom.value)==true) {
            prenom.value =  prenom.value.toUpperCase();
          
        } else {
            alert("Le prenom doit contenir des lettre uniquement");
            prenom.value="";
        }
        
      
    
  };

  const codeSecret = document.getElementById("code_secret"); 
  codeSecret.addEventListener("blur", f4); 
  function f4() {
    
     
  
    if (codeSecret.value.length !== 4) {
      alert("Le code secret doit contenir 4 chiffres.");
      codeSecret.value = ""; 
      
    }
  
    if (!/^[0-9]+$/.test(codeSecret.value)) {
      alert("Le code secret doit contenir uniquement des chiffres.");
      codeSecret.value = "";
      
    }
  
   
  };

const submit=document.getElementById("submit");
submit.addEventListener("click", f5 );

    function f5() {
        const confirmation = confirm("Souhaitez-vous confirmer la commande?");
      
        
        if (confirmation) {
          alert("commande confirmée.");
          
        } else {
          alert("commande annulée.");
        }
      }





