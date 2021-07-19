import { BehaviorSubject } from 'rxjs';

/**
 * BehaviorSubject
 */
// 訂閱時會得到"最後一次"的事件資訊，因此，建立物件實體需要給予一個"初始值"，作為最近一次的事件值
const source$ = new BehaviorSubject(0);
source$.subscribe(data => console.log(`1 : ${data}`));
source$.next(1);
console.log('value >> ' + source$.value);
source$.subscribe(data => console.log(`2 : ${data}`));
source$.next(2);
source$.complete();
source$.subscribe(data => console.log(`3 : ${data}`));
console.log('value >> ' + source$.value);
