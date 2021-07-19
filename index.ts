/* 
  https://rxjs.dev/ F12 測試
 */

/*
  https://rxmarbles.com/#take
*/

// 先過濾點擊位置，有在過濾後的範圍內才取(點擊位置沒過就不算有取一次)
var click$ = rxjs.fromEvent(document, 'click');
var subs = click$
  .pipe(
    rxjs.operators.filter(x => x.clientX > 300),
    rxjs.operators.take(4) // 取4次資料
  )
  .subscribe({
    next: d => {
      console.log(d);
    }
  });

// 還未過濾就算進有取的次數，再過濾點擊位置
var click$ = rxjs.fromEvent(document, 'click');
var subs = click$
  .pipe(
    rxjs.operators.take(4),
    rxjs.operators.filter(x => x.clientX > 300)
  )
  .subscribe({
    next: d => {
      console.log(d);
    }
  });
