// rollup.config.js

import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

export default {
	entry: "src/index.js",
	format: "iife",
	plugins: [
		resolve(),
		commonjs(),
		json(),
		babel({
			exclude: "node_modules/**" // only transpile our source code
		})
	],
	sourceMap: true,
	dest: "bundle.js"
};
