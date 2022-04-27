setInterval(
function hexColor() {
        const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;

        document.body.style.backgroundColor = colorHex;
        console.log(colorHex)
}, 2000)


