var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

let ship = document.getElementById("ship");
ship.addEventListener("click",()=>{
    delivery();
})

function delivery()
{
    let name  = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pc = document.getElementById("pc").value;
    let add = document.getElementById("add").value;
    console.log(name,phone,pc,add);

    let userdetail = {
        name,
        phone ,
        pc,
        add,
        
    };
    if (localStorage.getItem("addressuser") === null) {
        localStorage.setItem("addressuser", JSON.stringify([]));
    }

    let addressl = JSON.parse(localStorage.getItem("addressuser"));
    console.log(addressl);
    addressl.push(userdetail);
    console.log(userdetail)
    localStorage.setItem("addressuser", JSON.stringify(addressl));


    name.value = "";
    phone.value = "";
    pc.value = "";
    add.value = "";
    
    window.location.href = "payment.html";
}

