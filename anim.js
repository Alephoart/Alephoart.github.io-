// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I think of you", time: 30 },

  { text: "I haven't slept", time: 37 },

  { text: "I think I do, but", time: 45 },

  { text: "I don't forget", time: 52 },

  { text: "My body moves", time: 54 },

  { text: "Goes where I will", time: 59 },

  { text: "But though I try me", time: 63 },

  { text: "heart stays still", time: 66 },

  { text: "It never moves", time: 70 },

  { text: "Just won't be led", time: 71 },

  { text: "And so my mouth waters to be fed ", time: 77 },

  { text: "And you're always in my head", time: 84 },

  { text: "You're always in my head", time: 92 },

  { text: "You're always in my head", time: 99 },

  { text: "You're always in my head", time: 106 },


  { text: "You're always in my head", time: 129 },

  { text: "Always in my", time: 136 },

  { text: "Always in my", time: 138 },

  { text: "This", time: 145 },

  { text: "I guess", time: 149 },

  { text: "Is to tell you you're chosen", time: 154 },

  { text: "Out from the rest", time: 156 },

  { text: "❤️Te amo mi pequeña❤️", time: 175 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);