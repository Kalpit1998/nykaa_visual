let MYWISH_BOX = document.querySelector(".MYWISH-BOX")

let getWishStore = JSON.parse(localStorage.getItem("NykaaWish"))

function AppendtoMYWISH_BOX(getWishStore) {
    MYWISH_BOX.innerHTML = null
    getWishStore.forEach((prod) => {

        
        let div = document.createElement("div")
        div.setAttribute("class" , "wish_div")

        cutbtn = document.createElement("button")
        cutbtn.setAttribute("class" , "cutbtn")
        cutbtn.innerText = "x"

        let img = document.createElement("img")
        img.src = prod.img1

        let pname = document.createElement("p")
        pname.textContent = prod.name.substring(0, 40)

        let rate = document.createElement("h3")
        rate.textContent = prod.rating

        let mrp_text = document.createElement("p")
        mrp_text.textContent = "MRP : ₹"

        let MRP = document.createElement("p")
        MRP.textContent = mrp_text.textContent + prod.price

        let movebtn = document.createElement("button") 
        movebtn.setAttribute("class" , "movetobag")
        movebtn.innerText = "MOVE TO BAG"

        div.append(cutbtn,img, pname, rate, MRP, movebtn)

        MYWISH_BOX.append(div)
    })
}

AppendtoMYWISH_BOX(getWishStore)