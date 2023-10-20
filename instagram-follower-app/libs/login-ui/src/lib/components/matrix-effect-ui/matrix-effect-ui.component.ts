import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'matrix-effect-ui',
  templateUrl: './matrix-effect-ui.component.html',
  styleUrls: ['./matrix-effect-ui.component.scss'],
})
export class MatrixEffectUiComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild('canvas2') canvas2: ElementRef<HTMLCanvasElement> | undefined;
  private ctx: CanvasRenderingContext2D | undefined | null;
  private ctx2: CanvasRenderingContext2D | undefined | null;
  private cw: number | undefined;
  private ch: number | undefined;
  private charArr: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  private maxCharCount = 100;
  private fallingCharArr: Point[] = [];
  private fontSize = 10;
  private maxColums: number | undefined;

  ngAfterViewInit() {
    this.initializeCanvas();
    this.createFallingChars();
    this.update();
  }

  private initializeCanvas() {
    this.ctx = this.canvas?.nativeElement.getContext('2d');
    this.ctx2 = this.canvas2?.nativeElement.getContext('2d');
    this.cw = window.innerWidth;
    this.ch = window.innerHeight;
    this.maxColums = this.cw / this.fontSize;
    if (this.canvas && this.canvas2) {
      this.canvas.nativeElement.width = this.canvas2.nativeElement.width =
        this.cw;
      this.canvas.nativeElement.height = this.canvas2.nativeElement.height =
        this.ch;
    }
  }

  private createFallingChars() {
    if (this.maxColums) {
      for (let i = 0; i < this.maxColums; i++) {
        this.fallingCharArr.push(
          new Point(i * this.fontSize, this.randomFloat(-500, 0))
        );
      }
    }
  }

  private randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private update() {
    if (this.cw && this.ch) {
      if (this.ctx && this.ctx2) {
        this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
        this.ctx.fillRect(0, 0, this.cw, this.ch);
        this.ctx2.clearRect(0, 0, this.cw, this.ch);
        for (let i = this.fallingCharArr.length - 1; i >= 0; i--) {
          this.fallingCharArr[i].draw(
            this.ctx,
            this.ctx2,
            this.charArr,
            this.fontSize,
            this.ch
          );
        }
        requestAnimationFrame(() => this.update());
      }
    }
  }
}

class Point {
  x: number;
  y: number;
  value: string = '';
  speed: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    ctx2: CanvasRenderingContext2D,
    charArr: string[],
    fontSize: number,
    ch: number
  ) {
    this.value = charArr[this.randomInt(0, charArr.length - 1)].toUpperCase();
    this.speed = this.randomFloat(1, 5);

    ctx2.fillStyle = 'rgba(255,255,255,0.8)';
    ctx2.font = fontSize + 'px san-serif';
    ctx2.fillText(this.value, this.x, this.y);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px san-serif';
    ctx.fillText(this.value, this.x, this.y);

    this.y += this.speed;
    if (this.y > ch) {
      this.y = this.randomFloat(-100, 0);
      this.speed = this.randomFloat(2, 5);
    }
  }
}
