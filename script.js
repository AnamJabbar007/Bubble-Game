let timer = 30;
let score = 0;
let rnHit = 0;

function incScore() {
  score += 10;
  document.querySelector('#scoreVal').innerHTML = score;
}

function getNewHit() {
  rnHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = rnHit;
}

function getRandomColor() {
  const colors = [
    "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD",
    "#F67280", "#C06C84", "#6C5B7B", "#355C7D", "#FF8C42"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function MakeBubble() {
  const container = document.querySelector('#pBottom');
  const bubbleSize = 60; // 50px + 10px gap approx
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const bubblesPerRow = Math.floor(containerWidth / bubbleSize);
  const bubblesPerColumn = Math.floor(containerHeight / bubbleSize);
  const totalBubbles = bubblesPerRow * bubblesPerColumn;

  let clutter = "";
  for (let i = 0; i < totalBubbles; i++) {
    let rn = Math.floor(Math.random() * 10);
    const color = getRandomColor();
    clutter += `<div class="bubble" style="background: radial-gradient(circle at 30% 30%, #ffffff66, ${color})">${rn}</div>`;
  }

  container.innerHTML = clutter;
}

function runTimer() {
  let timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#timerval').textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector('#pBottom').innerHTML = `<h2 style="color:white; text-align:center;">Game Over</h2>`;
    }
  }, 1000);
}

document.querySelector('#pBottom').addEventListener("click", function (dets) {
  let clickednum = Number(dets.target.textContent);
  if (clickednum === rnHit) {
    incScore();
    MakeBubble();
    getNewHit();
  }
});

// Regenerate bubbles on resize
window.addEventListener('resize', () => {
  MakeBubble();
});

runTimer();
MakeBubble();
getNewHit();
