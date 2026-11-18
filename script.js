<div id="garden">
  <h2>My Mood Garden</h2>
  <p id="message">Choose your mood!</p>
  <div id="flowers"></div>
</div>

<button onclick="changeMood('happy')">
  Happy
</button>

<button onclick="changeMood('calm')">
  Calm
</button>

<script>
function changeMood(mood) {
  const garden = document.getElementById("garden");
  const message = document.getElementById("message");

  if (mood === "happy") {
    garden.style.backgroundColor = "#FFE6A7";
    message.textContent = "Your garden feels happy!";
  }

  if (mood === "calm") {
    garden.style.backgroundColor = "#CDE8D0";
    message.textContent = "Your garden feels peaceful!";
  }
}
</script>
