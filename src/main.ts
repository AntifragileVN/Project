const createCanvas = (width: number, height: number) => {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.background = "#ff5";
  document.body.appendChild(canvas);
  return canvas;
};

const main = () => {
  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  const context: CanvasRenderingContext2D = canvas?.getContext("2d")!;

  context.fillRect(100, 0, 300, 300);
  context.fillStyle = "blue";
  context.fillRect(100, 500, 100, 2000);

  context.beginPath();
  context.arc(200, 400, 100, 0, Math.PI * 2, false);
  context.stroke();
  context.closePath();
};

main();
