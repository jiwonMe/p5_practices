import Sketch from "../core/Sketch"

const p5render = (
  node: HTMLDivElement,
  Sketch: new (node: HTMLDivElement) => Sketch,
) => {
  const sketch = new Sketch(node);
  console.log(node.clientHeight, node.clientWidth);
  setTimeout(() => {
    sketch.resizeCanvas(node.clientWidth, node.clientHeight);
  });
  new ResizeObserver(() => {
    sketch.resizeCanvas(node.clientWidth, node.clientHeight);
  }).observe(node);
}

export default p5render;