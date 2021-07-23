const btn = document.querySelector(".fancy-burger");
const menuBtnshowing = document.getElementById("pageMainNavCollapse");

let menuOpen = false

btn.addEventListener("click", () => {
    if (!menuOpen) {
        btn.querySelectorAll("span").forEach((span) => 
            span.classList.toggle("open")
        );
        menuBtnshowing.classList.add("show");
        menuOpen = true;
    } 
    else 
    {
        btn.querySelectorAll("span").forEach((span) => 
            span.classList.remove("open")
        );
        menuBtnshowing.classList.remove("show");
        menuOpen = false;
    }
});

