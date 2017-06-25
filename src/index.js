import WebMidi from "./webmidi";
import Context from "./context";

WebMidi.subscribe((webmidi) => {
	webmidi.inputs.map((input) => {
		input.addListener("noteon", "all", console.log.bind(console));
	});
});
