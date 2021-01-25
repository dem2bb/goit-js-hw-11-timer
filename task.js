const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minsRef: document.querySelector('span[data-value="mins"]'),
  secsRef: document.querySelector('span[data-value="secs"]'),
};

function startTimer() {
  const futureTime = new Date('February 10, 2021');
  setInterval(() => {
    const currentTime = new Date();
    const deltaTime = futureTime - currentTime;
    updateClockFace(deltaTime);
  }, 0);
}

startTimer();

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.daysRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.minsRef.textContent = `${mins}`;
  refs.secsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

/*
 *                         ВАРИАНТ ЧЕРЕЗ КЛАСС НИЖЕ
 */

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }

//   startTimer() {
//     setInterval(() => {
//       const currentTime = new Date();
//       const deltaTime = this.targetDate - currentTime;
//       this.updateClockFace(deltaTime);
//     }, 0);
//   }

//   updateClockFace(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     refs.daysRef.textContent = `${days}`;
//     refs.hoursRef.textContent = `${hours}`;
//     refs.minsRef.textContent = `${mins}`;
//     refs.secsRef.textContent = `${secs}`;
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const countDownNew = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('February 10, 2021'),
// });

// countDownNew.startTimer();
