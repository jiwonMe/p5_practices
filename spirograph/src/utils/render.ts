import Sketch from "../core/Sketch"

const p5render = (
  node: HTMLDivElement,
  Sketch: new (node: HTMLDivElement) => Sketch,
) => {
  new Sketch(node);
}

export default p5render;