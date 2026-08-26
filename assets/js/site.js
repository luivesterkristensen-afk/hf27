//#region Model
// ALT MODEL KODE SKAL VÆRE HER, DET VIL SIGE ALT MED DATABASE OG API

// DE KARAKTERER DER SKAL VISES I MYCOLLECTION
let MyCollectionDataBase = []
let myCoins = 500

let silverPackCards = [


   /* RARITIES:
    Normal
    Rare
    Ultra Rare
    Legendary
    Mythic */


    {
        name: "Atal",
        rarity: "Normal",
        /* STATS: AI: 90 - SPEED: 75 - HTML: 90 - CSS: 73 - JS: 65 - OVERALL: 72 */
    }

    ,{
        name: "Mikkel",
        rarity: "Rare",
        img: "GIV MIG EN SRC!!"
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
    const backgroundImg = document.createElement("img")
    const h1 = document.createElement("h1")
    const packsButton = document.createElement("button")
    const collectionButton = document.createElement("button")

    // GIV ELEMENTERNE EN ID
    backgroundImg.id = "forsideBaggrund"
    h1.id = "forsideh1"
    packsButton.id = "forsidePacksButton"
    collectionButton.id = "forsideCollectionButton"

    // GIV DEM INDHOLD
    backgroundImg.src = "Indsæt billede!!!!"
    h1.innerText = "HF27"
    packsButton.innerText = "Packs"
    collectionButton.innerText = "My Collection"

    //FÅ DEM LAVET I HTML
    app.appendChild(backgroundImg)
    app.appendChild(h1)
    app.appendChild(packsButton)
    app.appendChild(collectionButton)

}

function bygPackView(){
    /* Det her er en funktion der bygger hele packview.
    Kald denne funktion for at bygge packview */
    
    
    app.innerHTML = ""
    
    // LAV ELEMENTERNE
    const coinSpan = document.createElement("span")
    const coinsDisplay = document.createElement("p")
    const coinsDisplayValue = document.createElement("p")
    // GRID SEKTION MED ALLE PAKKERNE
    const packSection = document.createElement("section")
    // SØLV PAKKEN
    const silverPack = document.createElement("figure")
    const silverPackImg = document.createElement("img")
    // GULD PAKKEN
    const goldPack = document.createElement("figure")
    const goldPackImg = document.createElement("img")
    // SPECIAL PAKKEN
    const specialPack = document.createElement("figure")
    const specialPackImg = document.createElement("img")
    /* Note: Husk at lave eventlisteners til pakkerne så de kan købes. */

    // Byg en eventlistener der kører en købfunktion for hver pack
    silverPack.addEventListener("click", silverPackPurchase)
    goldPack.addEventListener("click", goldPackPurchase)
    specialPack.addEventListener("click", specialPackPurchase)

    

    // GIV ELEMENTERNE EN ID
    coinSpan.id = "coinSpan"
    packSection.id = "packSection"
    
    // GIV DEM INDHOLD
    coinsDisplay.innerText = "Coins:"
    coinsDisplayValue.innerText = myCoins
    // GIV PAKKERNE ET BILLEDE
    silverPackImg.src = "https://picsum.photos/200/300?grayscale"
    goldPackImg.src = "GIV MIG EN SRC"
    specialPackImg.src = "GIV MIG EN SRC"


    //FÅ DEM LAVET I HTML
    app.appendChild(coinSpan)
    // COIN SPAN
    coinSpan.appendChild(coinsDisplay)
    coinSpan.appendChild(coinsDisplayValue)

    // PACK SEKTION
    
    packSection.appendChild(silverPack)
    packSection.appendChild(goldPack)
    packSection.appendChild(specialPack)

    //Packs
    silverPack.appendChild(silverPackImg)
    goldPack.appendChild(goldPackImg)
    specialPack.appendChild(specialPackImg)
    
    app.appendChild(packSection)
}

function bygMyCollectionView(){
    /* Det her er en funktion der bygger hele My Collection Viewet.
    Kald denne funktion for at bygge My Collection view */
    
    
    app.innerHTML = ""
    
    // LAV ELEMENTERNE
    const coinSpan = document.createElement("span")
    const coinsDisplay = document.createElement("p")
    const coinsDisplayValue = document.createElement("p")
    // GRID SEKTION MED ALLE KORT
    const collectionSection = document.createElement("section")

    // EMPTY CARD PLACEHOLDERS
    const emptyCardPlaceholder = document.createElement("figure")
    const emptyCardPlaceholderImg = document.createElement("img")
    
    /* husk lige at lave sådan at kortene bliver sendt her ind i collectionSection */

    

    // GIV ELEMENTERNE EN ID
    coinSpan.id = "coinSpan"
    collectionSection.id = "collectionSection"
    
    // GIV DEM INDHOLD
    coinsDisplay.innerText = "Coins:"
    coinsDisplayValue.innerText = "0"

    // GIV SRCS TIL PLACEHOLDERS
    emptyCardPlaceholderImg.src = "GIV MIG EN SRC!!!"


    //FÅ DEM LAVET I HTML
    app.appendChild(coinSpan)
    // COIN SPAN
    coinSpan.appendChild(coinsDisplay)
    coinSpan.appendChild(coinsDisplayValue)

    // EMPTY PLACEHOLDERS
    collectionSection.appendChild(emptyCardPlaceholder)
    emptyCardPlaceholder.appendChild(emptyCardPlaceholderImg)

    // LAV FLERE PLACEHOLDERS
    
    
    app.appendChild(collectionSection)
}

function bygPackOpeningView(){
/* Det her er en funktion der bygger pack opening Viewet.
    Kald denne funktion for at bygge PackOpening view */
    app.innerHTML = ""

    // Lav elementerne
    const openingCard = document.createElement("figure")
    const openingCardImg = document.createElement("img")
    
    // openingCardImg.src = CardDrafted

    openingCard.appendChild(openingCardImg)
    app.appendChild(openingCard)
    
}











//#endregion


//#region Controller
// ALT DER KAN KONTROLLERES SKAL LAVES HER DET KAN FX VÆRE CALLBACKS.

function silverPackPurchase(){
    if (myCoins > 100) {
        myCoins -= 100
        console.log("købt silver pack")
        silverPackCards.map(Math.random())
        bygPackOpeningView()
    }
    
    

    
}

function goldPackPurchase(){
    console.log("købt gold pack")
    bygPackOpeningView()
}

function specialPackPurchase(){
    console.log("købt special pack")
    bygPackOpeningView()
}

//#endregion

/* KØR SIDEN - Under dette stykke skal du køre funktionerne der er nødvendige for siden kører.

*/
bygPackView()