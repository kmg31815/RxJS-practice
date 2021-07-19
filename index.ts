import {
  SchedulerLike,
  queueScheduler,
  asapScheduler,
  asyncScheduler,
  animationFrameScheduler,
  fromEvent,
  range
} from 'rxjs';

const initPosition = () => {
  const blockElement = document.querySelector('#block') as HTMLElement;
  blockElement.style.left = '100px';
  blockElement.style.top = '100px';
};

const updatePositionByScheduler = (scheduler: SchedulerLike) => {
  initPosition();

  setTimeout(() => {
    console.log('start');

    range(0, 100, scheduler).subscribe({
      next: val => {
        const blockElement = document.querySelector('#block') as HTMLElement;
        blockElement.style.left = 100 + val + 'px';
        blockElement.style.top = 100 + val + 'px';
      },
      complete: () => console.log('complete')
    });
    console.log('end');
  }, 300);
};

fromEvent(document.querySelector('#goNull'), 'click').subscribe(() => {
  updatePositionByScheduler(null);
});

fromEvent(document.querySelector('#goQueue'), 'click').subscribe(() => {
  updatePositionByScheduler(queueScheduler);
});

fromEvent(document.querySelector('#goAsap'), 'click').subscribe(() => {
  updatePositionByScheduler(asapScheduler);
});

fromEvent(document.querySelector('#goAsync'), 'click').subscribe(() => {
  updatePositionByScheduler(asyncScheduler);
});

fromEvent(document.querySelector('#goAnimationFrame'), 'click').subscribe(
  () => {
    updatePositionByScheduler(animationFrameScheduler);
  }
);
