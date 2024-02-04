#!/bin/sh

wasm-pack build src/lib/page-only --no-pack --target web
wasm-pack build src/lib/page-and-endpoint --no-pack --target web
