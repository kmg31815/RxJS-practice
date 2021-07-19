import { Subject } from 'rxjs';

/*
  只有 Observer 與 Observable 的痛點：
    兩個 observer 想要訂閱同一個 observable，但每次訂閱都會讓 observable 物件執行一次
*/

const source$ = new Subject();
source$.subscribe(data => console.log(`A : ${data}`)); // 若只處理next狀態，可只傳第一個callback function
source$.next(1); // 當來源stream有事件發生，事件傳遞就會給觀察者
source$.next(2);
source$.subscribe(data => console.log(`B : ${data}`));
source$.next(3);
source$.next(4);
source$.subscribe(data => console.log(`C : ${data}`));
source$.complete();
