mod utils;

use utils::set_panic_hook;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    log("Hello, page-only!");
}

#[wasm_bindgen(start)]
fn start() {
	set_panic_hook();
}
