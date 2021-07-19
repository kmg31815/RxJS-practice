import { ReplaySubject } from 'rxjs';

/**
 * ReplaySubject(N)
 */
// 每當物件實體被訂閱時會重播最近 N 次事件資料
const source$ = new ReplaySubject(3);
source$.subscribe(data => console.log(`第一次訂閱 : ${data}`));
for (let i = 0; i < 5; ++i) {
  source$.next(i);
}
source$.subscribe(data => console.log(`第二次訂閱 : ${data}`));
source$.complete(); // 就算資料流發生錯誤或完成，每次訂閱一樣會收到最近N次事件資料
source$.subscribe(data => console.log(`第三次訂閱 : ${data}`));
