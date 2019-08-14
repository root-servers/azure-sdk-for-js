// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { assert } from "chai";
import { parseHeaders, XhrHttpClient } from "../lib/xhrHttpClient";
import { WebResource } from "../lib/webResource";

describe("XhrHttpClient", function() {
  it("parses headers", function() {
    const xhr = {
      getAllResponseHeaders: () =>
        "Content-Length: 42\r\n" +
        "value: hello\r\n"
    } as XMLHttpRequest;
    const headers = parseHeaders(xhr);
    assert.strictEqual(headers.get("content-length"), "42");
    assert.strictEqual(headers.get("value"), "hello");
  });

  it("parses empty string headers", function() {
    const xhr = {
      getAllResponseHeaders: () =>
        "Content-Type: \r\n" + // preserve trailing whitespace in test case
        "value:\r\n"
    } as XMLHttpRequest;
    const headers = parseHeaders(xhr);
    assert.strictEqual(headers.get("content-type"), "");
    assert.strictEqual(headers.get("value"), "");
  });

  it("throws when proxy settings are passed", function() {
    const request = new WebResource();
    request.proxySettings = {
      host: "1.1.1.1",
      port: 8080
    };

    const client = new XhrHttpClient();
    assert.throws(() => { client.sendRequest(request); }, Error);
  });
});