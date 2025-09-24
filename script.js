// Contador regressivo diagonal
function updateDiagonalCounter() {
  const eventDate = new Date('2025-10-25T10:00:00');
  const now = new Date();
  const diff = eventDate - now;

  const diagonal = document.querySelector('.diagonal-counter');
  const counterFull = document.getElementById('counter-full');

  const counterDays = document.getElementById('counter-days');
  const fullDias = document.getElementById('full-dias');
  const fullHoras = document.getElementById('full-horas');
  const fullMinutos = document.getElementById('full-minutos');
  const fullSegundos = document.getElementById('full-segundos');

  if (diff <= 0) {
    diagonal.style.display = 'none';
    if(counterFull) counterFull.style.display = 'none';
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  counterDays.textContent = String(d).padStart(2, '0');
  if(fullDias) fullDias.textContent = String(d).padStart(2, '0');
  if(fullHoras) fullHoras.textContent = String(h).padStart(2, '0');
  if(fullMinutos) fullMinutos.textContent = String(m).padStart(2, '0');
  if(fullSegundos) fullSegundos.textContent = String(s).padStart(2, '0');
}

setInterval(updateDiagonalCounter, 1000);
updateDiagonalCounter();

// Mostrar/ocultar contador completo
const counterCorner = document.getElementById('counter-corner');
const counterFull = document.getElementById('counter-full');
const closeFullCounter = document.getElementById('close-full-counter');

if(counterCorner && counterFull) {
  counterCorner.addEventListener('click', () => {
    counterFull.style.display = 'block';
  });
}

if(closeFullCounter) {
  closeFullCounter.addEventListener('click', () => {
    counterFull.style.display = 'none';
  });
}