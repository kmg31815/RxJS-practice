import { Observable } from 'rxjs';

const source$ = new Observable(subscriber => {
  console.log('stream ');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  console.log('stream ');
  subscriber.complete(console.log('subscriber complete'));
});

// 每當訂閱發生，便執行callback function內的程式碼
source$.subscribe({
  next: data => console.log(`Observable : ${data}`),
  complete: () => console.log('complete')
});
