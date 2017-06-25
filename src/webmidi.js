import WebMidi from "webmidi";
import Rx from "rxjs";

let enabled = false;

export default Rx.Observable.create((observer) => {
	if(enabled){
		observer.next(WebMidi);
		return;
	}

	enabled = true;
	WebMidi.enable((err) => {
		if(err) observer.error(err);
		else observer.next(WebMidi);
	});
});
