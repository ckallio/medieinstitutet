
    // Skapa en variabel för varje button
    const hideButton = document.getElementById("hideButton1");
    const hideButton2 = document.getElementById("hideButton2");
    const hideButton3 = document.getElementById("hideButton3");

    const widthButton = document.getElementById("widthButton1");
    
    
  
    


    // En funktion för att visa bilden
    function showHideImage(){
        const buttonId = this.id;

        const kitten = document.querySelector("#" + buttonId + "+ button + img");
        

       
        // Skapa en variabel som bertättar om bilden syns eller ej
        const kittenIsVisible = kitten.style.display === "block";
        

        // skapa en if sats som gör motsatens till syns eller ej
        if (kittenIsVisible){
            kitten.style.display = "none";
        } else {

            kitten.style.display = "block";

       
        }
    }
 

    // en funktion för att ändra bildens bredd
    function changeWidthImage(){
        const kitten = document.querySelector("img");
        // bilden width
        kitten.width = 350;
    }

    hideButton.addEventListener("click",showHideImage);
    hideButton2.addEventListener("click",showHideImage);
    hideButton3.addEventListener("click",showHideImage);
    
    widthButton.addEventListener("click",changeWidthImage);
    
