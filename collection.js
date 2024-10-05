var sidenav = document.querySelector(".side-navbar")

function shownav(){
    sidenav.style.left="0%";
}

function closenav(){
    sidenav.style.left="-60%";

}




var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event){

     var enterdValue= event.target.value.toUpperCase()
    for(var count =0; count<productlist.length;count++){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterdValue)<0){
            productlist[count].style.display ="none"
    
        }
        else{
            productlist[count].style.display="block"
        }

    }

   
})