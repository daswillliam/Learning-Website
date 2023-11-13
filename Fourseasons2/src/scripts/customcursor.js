const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');


window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"})
});

window.addEventListener("mousedown", function (e) {
    if (e.button === 0) { // 0 steht für den linken Mausklick
        cursorOutline.classList.add('clicked');
    }
});

window.addEventListener("mouseup", function () {
    cursorOutline.classList.remove('clicked');
});

const buttons = document.querySelectorAll('button, a, label, input, span');  // oder ein anderer Selektor für die gewünschten Elemente

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      cursorOutline.classList.add('hovered');
  });
  button.addEventListener('mouseleave', () => {
      cursorOutline.classList.remove('hovered');
  });
});