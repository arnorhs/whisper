# Whisper

A very very very basic dumb small publish/subscribe library for Javascript.

The publish subscribe pattern is used when you need to have some unrelated parts of your code
know when something happened w/o too much object passing - they say it's "Decoupled" whatever.

Mostly for client side, since it would probably not be of use for node peeps

### Features (there hardly are any)
- You can subscribe to events, and trigger events using ‘Whisper.say()‘ and ‘Whisper.listen()‘
- Supports multiple events of course etc.
- Passing in extra arguments results in them getting called on the subscribed function

### Limitations
- No unsubscribe yet
- No namespaces

### Why?
- Sometimes you don't need much. Sometimes you don't even need unit tests because you are
  suck at life.

### Usage:
You just need to include the JS file in your project, and then basic usage is

    // Subscribe to an event
    Whisper.listen("math_is_fun", function(a,b) {
      alert("a + b = " + (a + b));
    });

    // Subscribe again for fun
    Whisper.listen("math_is_fun", function(a,b) {
      alert("a / b = " + (a / b).toFixed(2));
    });

    // Emit/trigger the event - results in two function calls:
    Whisper.say("math_is_fun", 4, 7);

---

### License:

(Uses the MIT License)

Copyright (c) 2013 Arnor Heidar Sigurdsson <arnorhs@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the 'Software'), to
deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


