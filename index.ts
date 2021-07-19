import { AsyncSubject } from 'rxjs';

/**
 * AsyncSubject
 */
// 只會將完成前"最後一次"事件發送給當下有訂閱的觀察者
const source$ = new AsyncSubject();
source$.subscribe(data => console.log(`第一次訂閱 : ${data}`));
source$.next(1);
source$.subscribe(data => console.log(`第二次訂閱 : ${data}`));
source$.next(2);
source$.complete();
source$.subscribe(data => console.log(`第三次訂閱 : ${data}`));
