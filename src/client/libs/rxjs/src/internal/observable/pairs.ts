import { Observable } from '../Observable';
import { SchedulerAction, SchedulerLike } from '../types';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';

/**
 * Convert an object into an observable sequence of [key, value] pairs
 * using an optional {@link SchedulerLike} to enumerate the object.
 *
 * ## Example
 * Converts a javascript object to an Observable
 * ```javascript
 * const obj = {
 *   foo: 42,
 *   bar: 56,
 *   baz: 78,
 * };
 *
 * const source = pairs(obj);
 *
 * const subscription = source.subscribe(
 *   x => console.log('Next: %s', x),
 *   err => console.log('Error: %s', err),
 *   () => console.log('Completed'),
 * );
 * ```
 *
 * @param {Object} obj The object to inspect and turn into an
 * Observable sequence.
 * @param {SchedulerLike} [scheduler] An optional {@link SchedulerLike} to run the
 * enumeration of the input sequence on.
 * @returns {(Observable<[string, T]>)} An observable sequence of
 * [key, value] pairs from the object.
 */
export function pairs<T>(obj: Object, scheduler?: SchedulerLike): Observable<[string, T]> {
  if (!scheduler) {
    return new Observable<[string, T]>(subscriber => {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length && !subscriber.closed; i++) {
        const key = keys[i];
        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }
      subscriber.complete();
    });
  } else {
    return new Observable<[string, T]>(subscriber => {
      const keys = Object.keys(obj);
      const subscription = new Subscription();
      subscription.add(
        scheduler.schedule<{ keys: string[], index: number, subscriber: Subscriber<[string, T]>, subscription: Subscription, obj: Object }>
          (dispatch, 0, { keys, index: 0, subscriber, subscription, obj }));
      return subscription;
    });
  }
}

/** @internal */
export function dispatch<T>(this: SchedulerAction<any>,
                            state: { keys: string[], index: number, subscriber: Subscriber<[string, T]>, subscription: Subscription, obj: Object }) {
  const { keys, index, subscriber, subscription, obj } = state;
  if (!subscriber.closed) {
    if (index < keys.length) {
      const key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({ keys, index: index + 1, subscriber, subscription, obj }));
    } else {
      subscriber.complete();
    }
  }
}
