let menu_btn = document.querySelector("#menu-btn");
let navbar   = document.querySelector(".header nav"); 
menu_btn.addEventListener('click',()=>{
    navbar.classList.toggle("d-none");

});








window.onscroll = () =>{
    navbar.classList.add("d-none");

};
