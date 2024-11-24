const inputs = document.querySelectorAll(".css-controller input");
const resetButton = document.getElementById("reset");

inputs.forEach((input) => input.addEventListener("input", update));

function update() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Reset all styles to default
resetButton.addEventListener("click", () => {
    document.documentElement.style.setProperty("--base", "rgb(255,133,0)");
    document.documentElement.style.setProperty("--width", "50%");
    document.documentElement.style.setProperty("--border-radius", "15px");
    document.documentElement.style.setProperty("--padding", "20px");
    document.documentElement.style.setProperty("--blur", "0px");
    document.documentElement.style.setProperty("--rotate", "0deg");
    document.documentElement.style.setProperty("--opacity", "1");
    document.documentElement.style.setProperty("--shadow-color", "#000000");
    document.documentElement.style.setProperty("--shadow-blur", "0px");
    document.documentElement.style.setProperty("--shadow-spread", "0px");
});
