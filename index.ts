import { Observable } from 'rxjs';

const source$ = new Observable(subscriber => {
  console.log('stream head');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
    console.log('stream foot');
  }, 100);
  subscriber.complete(console.log('subscriber complete'));
});

/**
 * 非同步
 */
// 每當訂閱發生，便執行callback function內的程式碼
source$.subscribe({
  next: data => console.log(`Observable1 : ${data}`),
  complete: () => console.log('complete1')
});
source$.subscribe({
  next: data => console.log(`Observable2 : ${data}`),
  complete: () => console.log('complete2')
});
