console.log('main.js är laddad');

function createAnimalCard(animal, i){
    const animalName = animal.name;
    const animalDescription = animal.shortDescription;
    const animalImage = animal.imageName;
   
    let htmlTemplate = `</div>
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="${animalImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${animalName}</h5>
    <p class="card-text">${animalDescription}</p>
    <a href="#" class="btn btn-primary animal-${i}" onclick="showSidebar(event)">Läs mer</a>
  </div>
</div>
    </div>
  </div>
</div>`;

return htmlTemplate;
}
function insertAnimalCard(htmlTemplate){
    const zooContainer = document.querySelector('.zoo-container')
    zooContainer.innerHTML += htmlTemplate;
    
}
function showSidebar(event){
    
    let animalNumber = event.target.className;
    const splitClass = animalNumber.split(" ");
    const animalClass = splitClass[2].split("-");
    const animalPosition = animalClass[1];
    

    const asideHeadline = document.querySelector("h2");
    const asideDescription = document.querySelector("aside > p");
    const currentAnimal = zoo [animalPosition];

    
    asideDescription.innerText = currentAnimal.longDescription;


}

const fågel = {
    name: "pippi",
    age: 80,
    imageName: "images/litenfågel.jpg",
    shortDescription: "pippi är jättegammal",
    longDescription: "pippi kommer från sydamerika där han levde i 10år",
}

const fågelstornäsa = {
    name: "dammsugaren",
    age: 10,
    imageName: "images/fågelstornäsa.jpg",
    shortDescription: "dammsugaren gillar mat",
    longDescription: "dammsugaren är uppvuxen i sverige",
}

const räv = {
    name: "pelle   ",
    age: 18,
    imageName: "images/räv.jpg",
    shortDescription: "pelle gillar att vara ute",
    longDescription: "pelle är en blandning av hund och räv",
}

const zoo = [];
zoo.push(räv);
zoo.push(fågel);
zoo.push(fågelstornäsa);


for (let i = 0; i < zoo.length; i++){
    const currentAnimal = zoo[i];
   
    const animalCard = createAnimalCard(currentAnimal, i);
    insertAnimalCard(animalCard);
}