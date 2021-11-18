/**
 * @title HTTP server: Hello World
 * @difficulty intermediate
 * @tags cli, deploy
 * @run --allow-net <url>
 *
 * An example of a HTTP server that serves a "Hello World" message.
 */

// Import the http server from std/http.
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

// HTTP servers need a handler function. This function is called for every
// request that comes in. It must return a `Response`. The handler function can
// be asynchronous (it may return a `Promise`).
function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

// To start the server on the default port, call `serve` with the handler.
console.log("Listening on http://localhost:8000");
serve(handler);
