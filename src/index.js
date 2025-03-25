// Your code here
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("db.json");
    const data = await response.json();
    const characterBar = document.getElementById("character-bar");

    data.characters.forEach(character => {
        const span = document.createElement("span");
        span.textContent = character.name;
        characterBar.appendChild(span);});});
