//#region Model
// ALT MODEL KODE SKAL VÆRE HER, DET VIL SIGE ALT MED DATABASE OG API

// DE KARAKTERER DER SKAL VISES I MYCOLLECTION
let MyCollectionDataBase = []
let myCoins = 500

let Cards = [


   /* RARITIES:
    Normal
    Rare
    Ultra Rare
    Legendary
    Mythic */


    {
        name: "Atal",
        rarity: "Normal",
        img: "assets/img/ataltemp.png",
        val: 50
        /* STATS: AI: 77 - SPEED: 75 - HTML: 72 - CSS: 73 - JS: 65 - OVERALL: 62 */
    }

    ,{
        name: "Mikkel",
        rarity: "Rare",
        img: "assets/img/mikkeltemp.png",
        val: 200
        /* STATS: AI: 70 - SPEED: 88 - HTML: 90 - CSS: 73 - JS: 77 - OVERALL: 72 */
    },

    {
        name: "Mingus",
        rarity: "Ultra Rare",
        img: "assets/img/mingustemp.png",
        val: 300
        /* STATS: AI: 65 - SPEED: 68 - HTML: 92 - CSS: 80 - JS: 67 - OVERALL:  */
    },

    {
        name: "Vitalli",
        rarity: "Legendary",
        img: "assets/img/vitallitemp.png",
        val: 380
        /* STATS: AI: 70 - SPEED: 88 - HTML: 90 - CSS: 73 - JS: 77 - OVERALL: 80 */
    },

    {
        name: "Kasper",
        rarity: "Mythic",
        img: "assets/img/kaspertemp.png",
        val: 600
        /* STATS: AI: 70 - SPEED: 88 - HTML: 90 - CSS: 73 - JS: 77 - OVERALL: 80 */
    }
]

//#endregion


//#region View
// ALT DER BYGGER VIEW, ALTSÅ NOGET MAN KAN SE SKAL VÆRE HER
const app = document.getElementById("app")

// VIEW FUNKTIONERNE
function bygForside(){
    /* Det her er en funktion der bygger hele forsiden.
    Kald denne funktion for at bygge forsiden */
    
    
    app.innerHTML = ""
    
    // LAV ELEMENTERNE
    const forsideContainer = document.createElement("section")
    const backgroundImg = document.createElement("img")
    const buttonDiv = document.createElement("div")
    const packsButton = document.createElement("button")
    const collectionButton = document.createElement("button")

    // GIV ELEMENTERNE EN ID
    forsideContainer.id = "forsideContainer"
    backgroundImg.id = "forsideBaggrund"
    buttonDiv.id = "forsideButtonDiv"

    // giver knapper event
    packsButton.addEventListener("click", () => {
        bygPackView()
    })

    collectionButton.addEventListener("click", () =>{
        bygMyCollectionView()
    })

    // GIV DEM INDHOLD
    backgroundImg.src = "assets/img/hf27background.png"
    packsButton.innerText = "Packs"
    collectionButton.innerText = "My Collection"

    //FÅ DEM LAVET I HTML
    
    forsideContainer.appendChild(backgroundImg)
    buttonDiv.appendChild(packsButton)
    buttonDiv.appendChild(collectionButton)
    forsideContainer.appendChild(buttonDiv)
    app.appendChild(forsideContainer)

}

function bygPackView(){
    /* Det her er en funktion der bygger hele packview.
    Kald denne funktion for at bygge packview */
    readCoins()
    
    app.innerHTML = ""
    
    // LAV ELEMENTERNE
    const packViewContainer = document.createElement("section")
    const packViewHeader = document.createElement("h1")
    const PackExitKnap = document.createElement("button")
    const coinSpan = document.createElement("span")
    const coinsDisplay = document.createElement("p")
    const coinsDisplayValue = document.createElement("p")
    
    // GRID SEKTION MED ALLE PAKKERNE
    const packSection = document.createElement("section")
    // SØLV PAKKEN
    const silverPack = document.createElement("figure")
    const silverPackImg = document.createElement("img")
    const silverPackPrice = document.createElement("figcaption")
    // GULD PAKKEN
    const goldPack = document.createElement("figure")
    const goldPackImg = document.createElement("img")
    const goldPackPrice = document.createElement("figcaption")
    // SPECIAL PAKKEN
    const specialPack = document.createElement("figure")
    const specialPackImg = document.createElement("img")
    const specialPackPrice = document.createElement("figcaption")
    /* Note: Husk at lave eventlisteners til pakkerne så de kan købes. */

    //Byg en eventlistener til knapper
    PackExitKnap.addEventListener("click", () => {
        bygForside()
    })

    // Byg en eventlistener der kører en købfunktion for hver pack
    silverPack.addEventListener("click", silverPackPurchase)
    goldPack.addEventListener("click", goldPackPurchase)
    specialPack.addEventListener("click", specialPackPurchase)

    

    // GIV ELEMENTERNE EN ID
    packViewContainer.id = "packViewContainer"
    coinSpan.id = "coinSpan"
    coinsDisplayValue.id = "coinsDisplayValue"
    packSection.id = "packSection"
    PackExitKnap.id = "packExitknap" 
    
    // GIV DEM INDHOLD
    packViewHeader.innerText = "Packs"
    coinsDisplay.innerText = "Coins:"
    coinsDisplayValue.innerText = myCoins
    PackExitKnap.innerText = "Forside"
    // GIV PAKKERNE ET BILLEDE
    silverPackImg.src = "assets/img/silverpack.svg"
    goldPackImg.src = "assets/img/goldpack.svg"
    specialPackImg.src = "assets/img/specialpack.svg"

    // GIV PAKKERNES PRISSKILT INDHOLD
    silverPackPrice.innerText = "Pris: 100"
    goldPackPrice.innerText = "Pris: 300"
    specialPackPrice.innerText = "Pris: 500"
    



    //FÅ DEM LAVET I HTML
    
    // COIN SPAN
    coinSpan.appendChild(coinsDisplay)
    coinSpan.appendChild(coinsDisplayValue)

    // PACK SEKTION
    
    packSection.appendChild(silverPack)
    packSection.appendChild(goldPack)
    packSection.appendChild(specialPack)

    //Packs
    silverPack.appendChild(silverPackImg)
    silverPack.appendChild(silverPackPrice)
    goldPack.appendChild(goldPackImg)
    goldPack.appendChild(goldPackPrice)
    specialPack.appendChild(specialPackImg)
    specialPack.appendChild(specialPackPrice)
    
    packViewContainer.appendChild(coinSpan)
    packViewContainer.appendChild(packViewHeader)
    packViewContainer.appendChild(packSection)
    packViewContainer.appendChild(PackExitKnap)
    app.appendChild(packViewContainer)

    //append knapper

    
}

function bygMyCollectionView(){
    /* Det her er en funktion der bygger hele My Collection Viewet.
    Kald denne funktion for at bygge My Collection view */
    readCollection()
    readCoins()
    
    app.innerHTML = ""
    
    // LAV ELEMENTERNE
    const collectionContainer = document.createElement("section")
    const collectionHeader = document.createElement("h1")
    const CollectionExitKnap = document.createElement("button")
    const coinSpan = document.createElement("span")
    const coinsDisplay = document.createElement("p")
    const coinsDisplayValue = document.createElement("p")
    // GRID SEKTION MED ALLE KORT
    const collectionSection = document.createElement("section")

    // EMPTY CARD PLACEHOLDERS
    const emptyCardPlaceholder = document.createElement("figure")
    const emptyCardPlaceholderImg = document.createElement("img")

    
    /* husk lige at lave sådan at kortene bliver sendt her ind i collectionSection */

    //Byg Event Til knapper
    CollectionExitKnap.addEventListener("click", () => {
        bygForside()

    })

    

    // GIV ELEMENTERNE EN ID
    collectionContainer.id = "collectionContainer"
    collectionHeader.innerText = "My Collection"
    coinSpan.id = "coinSpan"
    collectionSection.id = "collectionSection"
    CollectionExitKnap.id = "CollectionExitKnap"
    
    // GIV DEM INDHOLD
    coinsDisplay.innerText = "Coins:"
    coinsDisplayValue.innerText = myCoins;
    CollectionExitKnap.innerText = "Forside"

    // GIV SRCS TIL PLACEHOLDERS
if (MyCollectionDataBase.length > 0) {
         MyCollectionDataBase.forEach((element)=>{

        const Card = document.createElement("figure")
        const CardImg = document.createElement("img")

        CardImg.src = element.img;
        let cardToView = element.img;
        
        Card.addEventListener("click", ()=>{
            
            bygCardView(element)
        })

        Card.appendChild(CardImg)
        collectionSection.appendChild(Card)
         
        
    });
        } else {
            emptyCardPlaceholderImg.src = "assets/img/Mysterie.svg"
            collectionSection.appendChild(emptyCardPlaceholder)
        }

   
    
    // COIN SPAN
    coinSpan.appendChild(coinsDisplay)
    coinSpan.appendChild(coinsDisplayValue)
    //FÅ DEM LAVET I HTML
    
    // EMPTY PLACEHOLDERS
    
    emptyCardPlaceholder.appendChild(emptyCardPlaceholderImg)
    collectionContainer.appendChild(coinSpan)
    collectionContainer.appendChild(collectionHeader)
    collectionContainer.appendChild(collectionSection)
    collectionContainer.appendChild(CollectionExitKnap)
    app.appendChild(collectionContainer)
}

function bygPackOpeningView(CardDrafted){
/* Det her er en funktion der bygger pack opening Viewet.
    Kald denne funktion for at bygge PackOpening view */
    app.innerHTML = ""

    // Lav elementerne
    const packOpeningContainer = document.createElement("section")
    const openingCard = document.createElement("figure")
    const openingCardImg = document.createElement("img")

    packOpeningContainer.id = "packOpeningContainer"
    
    openingCardImg.src = CardDrafted.img

    openingCard.addEventListener("click", ()=>{
        bygPackView()
    })

    openingCard.appendChild(openingCardImg)
    packOpeningContainer.appendChild(openingCard)
    app.appendChild(packOpeningContainer)
    
}

function bygCardView(cardToView){
    // DET HER ER FUNKTIONEN DER GØR AT MAN KAN FOKUSERER PÅ ET KORT I KOLLEKTIONEN
    app.innerHTML = ""

    // Lav elementerne
    const CardViewContainer = document.createElement("section")
    const CardViewBtns = document.createElement("div")
    const Card = document.createElement("figure")
    const CardImg = document.createElement("img")
    const CardValue = document.createElement("p")
    const sellButton = document.createElement("button")
    const backknap = document.createElement("button")

    
    CardViewContainer.id = "CardViewContainer"

    CardImg.src = cardToView.img;

    CardValue.innerText = "Værdi:" + cardToView.val;
    
    // SÆLG KNAP
    sellButton.innerText = "Sælg Kort"
    sellButton.id = "sellBtn"
    sellButton.addEventListener("click", ()=>{
        sellCard(cardToView)
    })

    // TILBAGE KNAP
    backknap.addEventListener("click", bygMyCollectionView)

    backknap.innerText = "Tilbage"

    Card.appendChild(CardImg)
    CardViewContainer.appendChild(Card)
    CardViewBtns.appendChild(CardValue)
    CardViewBtns.appendChild(sellButton)
    CardViewBtns.appendChild(backknap)
    CardViewContainer.appendChild(CardViewBtns)
    app.appendChild(CardViewContainer)
}



//#endregion


//#region Controller
// ALT DER KAN KONTROLLERES SKAL LAVES HER DET KAN FX VÆRE CALLBACKS.

// PURCHASE FUNKTIONER SØRGER FOR AT MAN KAN KØBE PACKS OG VÆLGER ET RANDOM KORT

//#region Purchase
function silverPackPurchase(){
    if (myCoins >= 100) {
        myCoins -= 100
        saveCoins()
        let randomNumber = Math.random() * 100
        let rarity = randomNumber < 65 ? "Normal" : randomNumber < 82 ? "Rare" : randomNumber < 97 ? "Ultra Rare" : randomNumber < 99.67 ? "Legendary" : "Mythic"
        let possibleCards = Cards.filter(card => card.rarity === rarity)
        let randomCard = Math.floor(Math.random() * possibleCards.length)
        let CardDrafted = possibleCards[randomCard]
        saveCard(CardDrafted)
        bygPackOpeningView(CardDrafted)
    }  else {
        alert("ikke nok monetos")
    }
}

function goldPackPurchase(){
    if (myCoins >= 300) {
        myCoins -= 300
        saveCoins()
        console.log("købt gold pack")
        let randomNumber = Math.random() * 100
        let rarity = randomNumber < 45 ? "Normal" : randomNumber < 75 ? "Rare" : randomNumber < 93 ? "Ultra Rare" : randomNumber < 99.5 ? "Legendary" : "Mythic"
        let possibleCards = Cards.filter(card => card.rarity === rarity)
        let randomCard = Math.floor(Math.random() * possibleCards.length)
        let CardDrafted = possibleCards[randomCard]
        saveCard(CardDrafted)
        bygPackOpeningView(CardDrafted)
    } else {
        alert("ikke nok monetos")
    }
}

function specialPackPurchase(){
    if (myCoins >= 500) {
        myCoins -= 500
        saveCoins()
        console.log("købt special pack")
        let randomNumber = Math.random() * 100
        let rarity = randomNumber < 15 ? "Normal" : randomNumber < 40 ? "Rare" : randomNumber < 80 ? "Ultra Rare" : randomNumber < 99 ? "Legendary" : "Mythic"
        let possibleCards = Cards.filter(card => card.rarity === rarity)
        let randomCard = Math.floor(Math.random() * possibleCards.length)
        let CardDrafted = possibleCards[randomCard]
        saveCard(CardDrafted)
        bygPackOpeningView(CardDrafted)
    }  else {
        alert("ikke nok monetos")
    }
}


//#endregion

function saveCard(CardDrafted){
    
    MyCollectionDataBase.push(CardDrafted)

    localStorage.setItem(
        "Collection",
        JSON.stringify(MyCollectionDataBase)
    )
}

function readCollection(){
     const myCollectionData = localStorage.getItem("Collection")

    if (myCollectionData) {
        MyCollectionDataBase = JSON.parse(myCollectionData)
    }
}

function saveCoins(){

    localStorage.setItem(
        "Coins",
        JSON.stringify(myCoins)
    )
}

function readCoins(){
    const myCoinData = localStorage.getItem("Coins")

    if (myCoinData) {
        myCoins = JSON.parse(myCoinData)
    }
}

function sellCard(cardToSell){
    // finder den den skal slette
    let index = MyCollectionDataBase.indexOf(cardToSell);
    // GIR PENGE
    myCoins += cardToSell.val;
    
    // sletter
    MyCollectionDataBase.splice(index, 1);
    saveCoins()

    saveCollection()

    bygMyCollectionView()
}

function saveCollection() {
    localStorage.setItem(
        "Collection",
        JSON.stringify(MyCollectionDataBase)
    );
}

function GiveCoinsReward() {
    myCoins += 500;

    saveCoins();

    const coinElement = document.getElementById("coinsDisplayValue");

    if (coinElement) {
        coinElement.innerText = "+500!";
        console.log("viser +500 nu");

        setTimeout(() => {
            coinElement.innerText = myCoins;
        }, 4000);
    }
}
//#endregion

/* KØR SIDEN - Under dette stykke skal du køre funktionerne der er nødvendige for siden kører. */
bygForside()
setInterval(GiveCoinsReward, 200000)






// TEST FUNCTIONS
function TestCoins(value1){
    myCoins = value1;
    saveCoins()
    readCoins()
}