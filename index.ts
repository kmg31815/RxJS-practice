import { fromEvent, interval, from, of } from 'rxjs';
import { find, max } from 'rxjs/operators';

// find() => 找到就停下來
const clock$ = interval(5000).pipe(find(data => data % 3 === 2));
clock$.subscribe({
  next: data => {
    console.log(data);
  },
  complete: () => console.log('done')
});

const clock2$ = of(2, 3, 4, 5, 6).pipe(max());
clock2$.subscribe(console.log);

const clock3$ = from([2, 3, 4, 5, 6]).pipe(max());
clock3$.subscribe(console.log);
