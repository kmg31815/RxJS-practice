import { interval, fromEvent } from 'rxjs';
import { map, startWith, takeUntil, endWith } from 'rxjs/operators';

const ticker$ = interval(5000).pipe(map(() => 'tick'));

const documentClicks$ = fromEvent(document, 'click');

ticker$
  .pipe(
    startWith('interval started'),
    takeUntil(documentClicks$), // 當監聽到 documentClicks$ 事件，endWith()
    endWith('interval ended by click')
  )
  .subscribe(console.log);
