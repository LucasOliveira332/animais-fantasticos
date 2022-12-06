export default class MousePosition {
  constructor(area, content, incrementTop, incrementLeft) {
    this.area = document.querySelector(area);
    this.content = document.querySelector(content);
    this.incrementTop = incrementTop;
    this.incrementLeft = incrementLeft;

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }
  mouseOver() {
    this.content.style.display = "block";
    console.log(this.content);
  }

  mouseLeave() {
    this.content.style.display = "none";
  }

  mouseMove(event) {
    this.content.style.top = `${event.pageY + this.incrementTop}px`;
    this.content.style.left = `${event.pageX + this.incrementLeft}px`;
    if (event.offsetX > 150) this.content.style.left;
  }

  init() {
    this.area.addEventListener("mouseover", this.mouseOver);
    this.area.addEventListener("mouseleave", this.mouseLeave);
    this.area.addEventListener("mousemove", (e) => {
      this.mouseMove(e);
    });
    return this;
  }
}
