
   
   
   
   // Skapa en variabel för varje button
    const hideButton = document.getElementById("hideButton1");

    const widthButton = document.getElementById("widthButton1");
    
    const changeImageButton = document.getElementById("changeImage");

    const kitten = document.getElementById("image1");

    // En funktion för att visa bilden
    function showHideImage(){
        // const buttonId = this.id;

        // const kitten = document.querySelector("#" + buttonId + "+ button + img");
        

       
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

    function changeImageFunction(){
        const allImages = [
            {
                src:"fågel.jpg",
                alt:"en liten fågel",
                getSrc: function(){
                    return this.src;
                }
            },
            {
                src:"räv.jpg",
                alt:"en liten farlig räv",
                getSrc: function(){
                    return this.src;
                }
            },
            {
                src:"fågelnäsa.jpg",
                alt:"fågel med stor näsa",
                getSrc: function(){
                    return this.src;
                }
            },
        ];

        const getRandomInt = function (max) {
            // Tar ett slumpmässigt tal mellan 0 och 1, gångrar med max
            // Rundar siffran till ett heltal, nedåt.

        return Math.floor(Math.random() * max);
        }
        console.log(getRandomInt(3));
        const choosenImage  = allImages [getRandomInt(allImages.length)];
        kitten.src = choosenImage.getSrc();
        kitten.alt = choosenImage.alt;

        
        console.log(this);

    }
    hideButton.addEventListener("click",showHideImage);

    widthButton.addEventListener("click",changeWidthImage);

    changeImageButton.addEventListener("click", changeImageFunction);
    
