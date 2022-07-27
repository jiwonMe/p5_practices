import Sketch from "../core/Sketch";

export default class Spirograph extends Sketch {
  setup() {
    this.createCanvas(this.width, this.height);
    this.background(0xFF);
  }

  draw() {
    this.background(0xFF);
    this.rect(10, 10, this.width/2, this.height/2);
    this.ellipse(50, 50, 80, 80);

  }
}