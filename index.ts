import { concat, interval, range } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const timer$ = interval(1000).pipe(
  take(4),
  tap(d => {
    /**
     *  tap() 可以用來
     *    在不改變 Observable 的情況下
     *    * 查看console
     *    * 拋出錯誤
     *    * 於隨機情況下得知一個 observable 何時完成
     */
    console.log(' >> ' + d);
  })
);
const sequence$ = range(1, 10);

/**
 * concat()
 *  在第8版後移除，以 concatWith 取代
 *
 *  concat(a$, b$)與 a$.pipe(concatWith(b$))相同
 *  => a$ 被監聽了才會去監聽 b$
 */
const result$ = concat(timer$, sequence$);
const result2$ = concat(sequence$, timer$);

result$.subscribe(x => console.log(x));
result2$.subscribe(y => console.log('result2 >>' + y));
