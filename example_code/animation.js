// examples

const element = document.getElementById("test23");
let start, previousTimeStamp;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.01 * elapsed, 1000);
    element.style.transform = `rotate3d(-3, 0, 0, ${-count}deg)`;
    if (count === 10) {
      console.log("test");
      return (done = true);
    }
  }
  if (elapsed < 4500) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);
