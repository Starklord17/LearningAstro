import { renderers } from '../renderers.mjs';
import { onRequest } from '../_empty-middleware.mjs';
import { c as createExports, a as adapter } from '../chunks/entrypoint_bc1a35e8.mjs';
import { manifest } from '../manifest_39ce6013.mjs';
import '../chunks/pages/image-endpoint_110ddc0c.mjs';
import '../chunks/astro_f5dab1cf.mjs';
import 'node:fs';
import 'node:http';
import 'node:tls';
import 'node:crypto';
import 'node:stream/web';
import 'assert';
import 'net';
import 'http';
import 'stream';
import 'buffer';
import 'util';
import 'querystring';
import 'stream/web';
import 'events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'tls';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'crypto';
import 'diagnostics_channel';
import 'os';
import 'path';
import 'fs';
import 'node:path';
import 'node:url';
import 'node:fs/promises';

const page = () => import('../chunks/prerender_ff4a6969.mjs').then(n => n.o);

const pageModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	onRequest,
	page,
	renderers
}, Symbol.toStringTag, { value: 'Module' }));

const _manifest = Object.assign(manifest, {
	pageModule,
	renderers,
});
const _args = undefined;

const _exports = createExports(_manifest);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageModule };
