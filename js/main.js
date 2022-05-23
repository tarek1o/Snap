let navBar = document.querySelector(".fa-bars");
let closeBar = document.querySelector(".fa-xmark");
let menu = document.querySelector("header .container .content");

//Active navbar button to open the menu when it be clicked
navBar.addEventListener("click", function() {
    document.body.style.cssText = "transition: var(--main-transition); background-color: rgb(0 0 0 / 60%)";
    menu.classList.add("active")
});

//Active closebar button to close the menu when it be clicked
closeBar.addEventListener("click", function() {
    document.body.style.cssText = "transition: var(--main-transition); background-color: rgb(0 0 0 / 0%)";
    menu.classList.remove("active");
});

//Make check to add or delete the style of the body depending on the status of menu and the width of the body during resize
window.addEventListener("resize", function() {
    if(document.body.getBoundingClientRect().width <= 992 && menu.classList.contains("active")) {
        document.body.style.cssText = "transition: var(--main-transition); background-color: rgb(0 0 0 / 60%)";
    }
    else {
        document.body.style.cssText = "background-color: hsl(0, 0%, 98%)"
    }
})

//Make check to add or delete the style of the body depending on the status of menu and the width of the body during reload
window.addEventListener("load", function() {
    if(document.body.getBoundingClientRect().width < 992 && menu.classList.contains("active")) {
        document.body.style.cssText = "transition: var(--main-transition); background-color: rgb(0 0 0 / 60%)";
    }
    else {
        document.body.style.cssText = "background-color: hsl(0, 0%, 98%)"
    }
})


let moreMenu = Array.from(document.querySelectorAll(".content > ul > li.more"));
//Add event to each nested menu
for(let one of moreMenu) {
    one.addEventListener("click", function() {

        //add style to the main title
        one.querySelector("div").classList.toggle("active");

        document.querySelector(".info .container").classList.toggle("active");

        //display the arrows depending on the status of menu
        one.querySelectorAll(".arrow i").forEach(function(e) {
            e.classList.toggle("active");
        });

        //Add active class to the nested ul
        one.querySelector("ul").classList.toggle("active");

        //Add transition effect to each li of nested ul during opening it
        let innerLists = Array.from(one.querySelectorAll("ul.inner li"));
        for(let innerList of innerLists) {
            innerList.classList.toggle("active");
        }
    })
}

