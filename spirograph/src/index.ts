import P5 from 'p5';
import p5render from './utils/render';
import Spirograph from './sketches/Spirograph';

const root = document.createElement('div');
document.body.appendChild(root);

p5render(root, Spirograph);
