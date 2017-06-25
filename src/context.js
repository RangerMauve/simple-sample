import getContext from "audio-context";
import Rx from "rxjs";

export default Rx.Observable.create((observer) => {
	observer.next(getContext());
});
