const text = document.getElementById("text");
let shadow = "";

for (let i = 0; i < 50; i++) {
    shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0px #7f8c8d";
}

text.style.textShadow = shadow;
