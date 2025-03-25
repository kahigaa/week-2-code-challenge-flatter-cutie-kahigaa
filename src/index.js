// Your code here
document.addEventListener("DOMContentLoaded", async () => {
        const response = await fetch("db.json");
        const data = await response.json();
        const characterBar = document.getElementById("character-bar");
        data.characters.forEach(character => {
        const span = document.createElement("span");
        span.textContent = character.name;
                
span.addEventListener("click", () => {
    displayCharacterDetails(character);});
    characterBar.appendChild(span);});
    function displayCharacterDetails(character) {
    document.getElementById("name").textContent = character.name;
    document.getElementById("image").src = character.image;
    document.getElementById("image").alt = character.name;
    document.getElementById("vote-count").textContent = character.votes;}
        
const form = document.getElementById("votes-form");
form.onsubmit = () => {
  const input = document.getElementById("votes");
  const voteCount = document.getElementById("vote-count");
  voteCount.textContent = +voteCount.textContent + +input.value;
  input.value = "";
  return false;};
});        