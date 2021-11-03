

import {navbar} from "../component/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../component/pagefooter.js"

let footerpage = document.querySelector("footer")
footerpage.innerHTML = FOOTER()

//nykaa dhamaka
let nykaa_dhamaka = document.getElementById("nykaa-dhamaka")
let flag = true

setInterval(() => {

    if(flag == true){
        nykaa_dhamaka.style.opacity = "0"
        flag = false
    }else {
        nykaa_dhamaka.style.opacity = "1"
        flag = true
    }
},2500)

//nykaa dhamaka end

//brand section navbar

let BRAND = document.querySelector(".show-brandbox")
BRAND.addEventListener("mouseover" , ShowBrandBox)
BRAND.addEventListener("mouseleave" , HideBOxes1)

let brand_box = document.querySelector(".brand-box")
brand_box.addEventListener("mouseleave" , HideBrandBox)

function ShowBrandBox() {
    brand_box.style.display = "grid"
    
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"

    
let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.style.display = "none"

}
function HideBrandBox() {
    brand_box.style.display = "none"
}

function HideBOxes1() {

}

let popular_btn = document.querySelector(".popular-btn")
popular_btn.addEventListener("mouseover" , showPopularBrand)

let brand_popular_img = document.querySelector(".brand-imagesherepopular")
let brand_featured_img = document.querySelector(".brand-imageshereFeatured")

function showPopularBrand() {
    brand_popular_img.style.display = "grid"
    brand_featured_img.style.display = "none"
}

let featured_btn = document.querySelector(".Featured-btn")
featured_btn.addEventListener("mouseover" , ShowFeaturedimg)

function ShowFeaturedimg() {
    brand_popular_img.style.display = "none"
    brand_featured_img.style.display = "grid"
}

let onlyat_btn = document.querySelector(".onlynykaa")
onlyat_btn.addEventListener("mouseover" , showPopularBrand)

let new_launches = document.querySelector(".newlaunches")
new_launches.addEventListener("mouseover" , ShowFeaturedimg)


//brand section navbar end


// nykaa fashion section navbar
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")

mainnykaa_fahsionBox.addEventListener("mouseleave" , HideNykaaFashionBox)

let show_nykaa_fashionBox = document.querySelector(".show-nykaa_fashionBox")
show_nykaa_fashionBox.addEventListener("mouseover" , Show_Nykaa_Fashion_Box)

function Show_Nykaa_Fashion_Box() {
    mainnykaa_fahsionBox.style.display = "block"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"

    let beauty_advice_box = document.querySelector(".beauty-advice-box")
    beauty_advice_box.style.display = "none"
}

function HideNykaaFashionBox() {
    mainnykaa_fahsionBox.style.display = "none"
}


let Lingerie_more = document.querySelector(".Lingerie-and-more")
Lingerie_more.addEventListener("mouseover" , ShowLingerie)


let Nykaa_Fashion = document.querySelector(".Nykaa-Fashion")
Nykaa_Fashion.addEventListener("mouseover" , ShowNykaaFashionBox)

let Clothing_more = document.querySelector(".Clothing-and-more")
Clothing_more.addEventListener("mouseover" , ShowClothingBox)

let Bags_Footwear = document.querySelector(".Bags-and-Footwear")
Bags_Footwear.addEventListener("mouseover" , ShowBagsFootBox)

let Jewellery_acc = document.querySelector(".Jewellery-and-acc")
Jewellery_acc.addEventListener("mouseover" , ShowJewelleryBox)

let GadgetsTech_acc = document.querySelector(".Gedgets-and-Tech-acc")
GadgetsTech_acc.addEventListener("mouseover" , ShowGadgetTechBOx)



let Lingerie__box = document.querySelector(".Lingerie-box")

let nykaafashion__box = document.querySelector(".nykaa-fashion--box")

let clothing__box = document.querySelector(".clothing--box")

let bagfoot__box = document.querySelector(".bag-foot--box")

let Jewelleryacc__box = document.querySelector(".Jewellery-acc--box")

let gadgets__box = document.querySelector(".gadgets--box")


function ShowLingerie() {
    Lingerie__box.style.display = "grid"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowNykaaFashionBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "grid"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowClothingBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "grid"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowBagsFootBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "grid"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowJewelleryBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "grid"
    gadgets__box.style.display = "none"
}

function ShowGadgetTechBOx() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "grid"
}


// nykaa fashion section navbar end 1341

// nykaa beauty advice box navbar

let Show_nykaa_beautybox = document.querySelector(".Show-nykaa-beautybox")
Show_nykaa_beautybox.addEventListener("mouseover" , Shownykaabeautybox)

let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.addEventListener("mouseleave" , Hidebeautyadvicebox)

function Shownykaabeautybox() {
    beauty_advice_box.style.display = "flex"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"
        
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"
}
function Hidebeautyadvicebox() {
    beauty_advice_box.style.display = "none"
}


//shopping cart work

let cart__icon = document.querySelector(".cart--icon")

cart__icon.addEventListener("click" , ShowShoppingBag)

let shoppingBag = document.querySelector(".Shopping-bag-box")

function ShowShoppingBag() {
    shoppingBag.style.display = "block"
}

let shoppingBackBtn = document.querySelector(".shoppingback-btn")

shoppingBackBtn.addEventListener("click" , HideShoppingBag)

function HideShoppingBag() {
    shoppingBag.style.display = "none"
}


//shopping bag start

let Show_products_boxescont = document.querySelector(".Show-products-boxescont")
let ifempty = document.querySelector(".ifempty")


if(Show_products_boxescont.innerHTML === null) {
    ifempty.style.display = "block"
    console.log("hero")
}


//for search result

let second_search = document.querySelector(".second-search")
let search_resultbox = document.querySelector(".search-resultbox")
let search__container = document.querySelector(".search__container")
let body = document.querySelector("body")

second_search.addEventListener("input" , ShowSearchResultBox)
body.addEventListener("click" , HIDESearchResultBox)

function ShowSearchResultBox() {
    search_resultbox.style.display = "block"
    search__container.style.border = "2px solid #FC2779"
    search__container.style.backgroundColor = "#F4F4F4"
}
function HIDESearchResultBox() {
    second_search.value = null
    search_resultbox.style.display = "none"
    search__container.style.border = "none"
    search__container.style.backgroundColor = "#fff"
}

// THIRD BAR WORK START


window.addEventListener("scroll",()=>{

    let move = document.getElementById("nav---thirdbar");

   let scrollbar = window.scrollY;
    
     if(scrollbar>=100)
     {
        move.style.display = "none";
     }
     else{
         move.style.display="flex"
     }
     
})


let make_text = document.querySelector(".makeup-text")
let skin_text = document.querySelector(".skin-text")
let hair_text = document.querySelector(".hair-text")
let appliances_text = document.querySelector(".appliances-text")
let personalcare_text = document.querySelector(".personalcare-text")
let natural_text = document.querySelector(".natural-text")
let mombaby_text = document.querySelector(".mombaby-text")
let healthwellness_text = document.querySelector(".healthwellness-text")
let men_text = document.querySelector(".men-text")
let fragrance_text = document.querySelector(".fragrance-text")
let luxe_text = document.querySelector(".luxe-text")



let makeup_box = document.querySelector(".Makeup-box")
let skin_box = document.querySelector(".Skin-box")
let hair_box = document.querySelector(".Hair-box")
let appliances_box = document.querySelector(".Appliances-box")
let personalcare_box = document.querySelector(".Personal-care-box")
let natural_box = document.querySelector(".Natural-third-box")
let mombaby_box = document.querySelector(".MOM-baby-box")
let healthwell_box = document.querySelector(".Health-well-box")
let men_box = document.querySelector(".MEN-box")
let fragrance_box = document.querySelector(".Fragrance-box")
let Luxe_box = document.querySelector(".LUXE-box")

make_text.addEventListener("mouseover" , Showmakeup_Box)
make_text.addEventListener("mouseleave" , HIDEmakeup_Box)

function Showmakeup_Box() {
    makeup_box.style.display = "grid"
}

function HIDEmakeup_Box() {
    makeup_box.style.display = "none"
}


skin_text.addEventListener("mouseover" , Showskin_Box)
skin_text.addEventListener("mouseleave" , HIDEskin_Box)

function Showskin_Box() {
    skin_box.style.display = "grid"
}
function HIDEskin_Box() {
    skin_box.style.display = "none"
}

hair_text.addEventListener("mouseover" , Showhair_Box)
hair_text.addEventListener("mouseleave" , HIDEhair_Box)

function Showhair_Box() {
    hair_box.style.display = "grid"
}
function HIDEhair_Box() {
    hair_box.style.display = "none"
}

appliances_text.addEventListener("mouseover" , Showappliances_Box)
appliances_text.addEventListener("mouseleave" , HIDEappliances_Box)

function Showappliances_Box() {
    appliances_box.style.display = "grid"
}
function HIDEappliances_Box() {
    appliances_box.style.display = "none"
}

personalcare_text.addEventListener("mouseover" , Showpersonalcare_Box)
personalcare_text.addEventListener("mouseleave" , HIDEpersonalcare_Box)

function Showpersonalcare_Box() {
    personalcare_box.style.display = "grid"
}
function HIDEpersonalcare_Box() {
    personalcare_box.style.display = "none"
}

natural_text.addEventListener("mouseover" , Shownatural_box)
natural_text.addEventListener("mouseleave" , HIDEnatural_box)

function Shownatural_box() {
    natural_box.style.display = "grid"
}
function HIDEnatural_box() {
    natural_box.style.display = "none"
}

mombaby_text.addEventListener("mouseover" , Showmombaby_Box)
mombaby_text.addEventListener("mouseleave" , HIDEmombaby_Box)

function Showmombaby_Box() {
    mombaby_box.style.display = "grid"
}
function HIDEmombaby_Box() {
    mombaby_box.style.display = "none"
}

healthwellness_text.addEventListener("mouseover" , Showhealthwellness_Box)
healthwellness_text.addEventListener("mouseleave" , HIDEhealthwellness_Box)

function Showhealthwellness_Box() {
    healthwell_box.style.display = "grid"
}

function HIDEhealthwellness_Box() {
    healthwell_box.style.display = "none"
}

men_text.addEventListener("mouseover" , Showmen_Box)
men_text.addEventListener("mouseleave" , HIDEmen_Box)

function Showmen_Box() {
    men_box.style.display = "grid"
}
function HIDEmen_Box() {
    men_box.style.display = "none"
}

fragrance_text.addEventListener("mouseover", Showfragrance_Box)
fragrance_text.addEventListener("mouseleave", HIDEfragrance_Box)

function Showfragrance_Box() {
    fragrance_box.style.display = "grid"
}
function HIDEfragrance_Box() {
    fragrance_box.style.display = "none"
}


luxe_text.addEventListener("mouseover", Showluxe_Box)
luxe_text.addEventListener("mouseleave", HIDEluxe_Box)

function Showluxe_Box() {
    Luxe_box.style.display = "grid"
}
function HIDEluxe_Box() {
    Luxe_box.style.display = "none"
}



// QUANTITY WORK FOR NAVBAR


let qty1 = document.querySelector(".qty1")
let qty2 = document.querySelector(".qty2")
let qty3 = document.querySelector(".qty3")
let qty4 = document.querySelector(".qty4")
let qty5 = document.querySelector(".qty5")

let Quantity = document.querySelector(".Quantity")
let QTY_NUM = document.querySelector(".QTY-NUM")

let QTY_BOX = document.querySelector(".QTY--BOX")


let PRODUCT_PRICE = document.querySelector(".PRODUCT-PRICE")

Quantity.addEventListener("click" , SHOWQTYBOX)

function SHOWQTYBOX() {
    QTY_BOX.style.display = "grid"
}

//PENDING.......
qty1.addEventListener("click" , EDITPrice1)
qty2.addEventListener("click" , EDITPrice2)
qty3.addEventListener("click" , EDITPrice3)
qty4.addEventListener("click" , EDITPrice4)
qty5.addEventListener("click" , EDITPrice5)

function EDITPrice1() {
    qty1.style.backgroundColor = "#FC2779"


    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty1.style.backgroundColor = "#fff"
        QTY_NUM.textContent = "1"
    },1500)
    
}


function EDITPrice2() {
    qty2.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty2.style.backgroundColor = "#fff"
        QTY_NUM.textContent = "2"
    },1500)
    
}


function EDITPrice3() {
    qty3.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty3.style.backgroundColor = "#fff"
        QTY_NUM.textContent = "3"
    },1500)
    
}


function EDITPrice4() {
    qty4.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty4.style.backgroundColor = "#fff"
        QTY_NUM.textContent = "4"
    },1500)
    
}



function EDITPrice5() {
    qty5.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty5.style.backgroundColor = "#fff"
        QTY_NUM.textContent = "5"
    },1500)
    
}