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

function getThemeColors() {
  const theme = document.body.getAttribute("data-theme") || "dark";
  return theme === "light"
    ? { bg: "#f2f2f2", stroke: "rgba(0, 0, 0, 0.05)" }
    : { bg: "#111", stroke: "rgba(255, 255, 255, 0.05)" };
}

function draw() {
  const { bg, stroke } = getThemeColors();
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.2;

  const spacing = 40;
  const waveHeight = 10;
  const speed = 0.002;

  for (let y = -spacing; y < height + spacing; y += spacing) {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 10) {
      const offset = Math.sin((x + t) * 0.01) * waveHeight;
      ctx.lineTo(x, y + offset);
    }
    ctx.stroke();
  }

  t += speed * width;
  requestAnimationFrame(draw);
}

const observer = new MutationObserver(draw);
observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

draw();
