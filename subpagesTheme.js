let theme = localStorage.getItem("theme");
let body = document.querySelector("body");

if (theme == "light") {
    body.classList.add("light");
    body.classList.remove("dark");
}
else {
    body.classList.add("dark");
    body.classList.remove("light");
}
