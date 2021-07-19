import { Subject } from 'rxjs';

/**
 * asObservable()
 */
// Subject 本身可透過 next、error、complete 來改變 stream
// Subject 本身就是一個 Observable

const source$ = new Subject(); // Subject
source$.subscribe(data => console.log('source ' + data));
source$.next(1); // Subject next

// Observable
const observable$ = source$.asObservable(); // 表示回傳的型別是 Observable，代表使用他時不能用.next()傳值 => 避免 subject 直接暴露在外
observable$.subscribe(data => console.log('observable ' + data)); // 不會印

// observable$.next(2);
// Error: observable$.next is not a function
