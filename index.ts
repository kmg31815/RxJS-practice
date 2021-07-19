import { OperatorFunction, Observable, fromEvent } from 'rxjs';
import { filter, take } from 'rxjs/operators';

var click$ = fromEvent(document, 'click');
var subs = click$.pipe(DraculaOperator(300, 4)).subscribe(console.log);

// 自製 Operator
function DraculaOperator(
  minlength: number,
  times: number
): OperatorFunction<String, string> {
  // OperatorFunction 介面
  return function(source: Observable<string>) {
    // 回傳 Observable
    return source.pipe(
      filter(input => input.clientX >= minlength),
      take(times)
    );
  };
}
