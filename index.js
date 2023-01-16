const btnmenu = document.querySelector('#btnmenu');
const menu = document.querySelector('#menu');

const subMenuBtn = document.querySelectorAll(".submenu-btn")

btnmenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
})

for (let i= 0; i < subMenuBtn.length; i++) {

    subMenuBtn[i].addEventListener("click",function(){
       
            const subMenu = subMenuBtn[i].nextElementSibling;
            const height = subMenu.scrollHeight;

            if (window.innerWidth < 1024) {
            
                if (subMenu.classList.contains("desplegar")) {
                    console.log("entra en el if")
                    subMenu.classList.remove("desplegar");
                    subMenu.removeAttribute("style");
                } else{
                    console.log("entra en el else ")
                    subMenu.classList.add("desplegar")
                    subMenu.style.height = height + "px"
                }
            }

            
        
    });
}