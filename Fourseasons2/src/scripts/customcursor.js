const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
const cursorBall = document.getElementById('cursor-ball')


window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"})

  cursorBall.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 250, fill: "forwards"})
});

window.addEventListener("mousedown", function (e) {
    if (e.button === 0) { // 0 steht für den linken Mausklick
        cursorOutline.classList.add('clicked-outline');
        cursorBall.classList.add('clicked-ball')
    }
});

window.addEventListener("mouseup", function () {
    cursorOutline.classList.remove('clicked-outline');
    cursorBall.classList.remove('clicked-ball')
});

const buttons = document.querySelectorAll('button, a, label, input');  // oder ein anderer Selektor für die gewünschten Elemente

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    cursorDot.classList.add('hovered-dot');
  });
  button.addEventListener('mouseleave', () => {
    cursorDot.classList.remove('hovered-dot');
  });
  
  button.addEventListener('mouseenter', () => {
    cursorBall.classList.add('hovered-ball');
  });
  button.addEventListener('mouseleave', () => {
    cursorBall.classList.remove('hovered-ball');
  });
  
  button.addEventListener('mouseenter', () => {
    cursorOutline.classList.add('hovered-outline');
  });
  button.addEventListener('mouseleave', () => {
    cursorOutline.classList.remove('hovered-outline');
  });
});