const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_21cc360c._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__6f2002cc._.js");
runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
