document.addEventListener("DOMContentLoaded", () => {
    const List = document.getElementById("shopping-list");
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");

    button1.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "chleb";
        List.appendChild(li);
    })

    button2.addEventListener("click", () => {
        List.children[List.children.length-1].remove();
    })

    button3.addEventListener("click", () => {
        const copyEl = List.children[1].cloneNode(true)
        List.appendChild(copyEl);
    })
});