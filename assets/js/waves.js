const canvas = document.getElementById("topoCanvas");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
  ctx.lineWidth = 1.2;

  const spacing = 40;
  const waveHeight = 10;
  const speed = 0.002;

  for (let y = -spacing; y < height + spacing; y += spacing) {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 10) {
      let offset = Math.sin((x + t) * 0.01) * waveHeight;
      ctx.lineTo(x, y + offset);
    }
    ctx.stroke();
  }

  t += speed * width;
  requestAnimationFrame(draw);
}

draw();
