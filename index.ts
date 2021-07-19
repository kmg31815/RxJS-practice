import { of, asyncScheduler } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';

/**
 * 使用 observeOn 控制來源 Observable 事件發生時機
 * 使用 subscribeOn 控制訂閱時收到事件資料時機
 */
console.log('start');
of(1, 2)
  .pipe(subscribeOn(asyncScheduler))
  .subscribe({
    next: result => console.log(result),
    complete: () => console.log('complete')
  });
console.log('end');
