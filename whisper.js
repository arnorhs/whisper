(function() {

  var listeners = {};

  function listen(name, func) {
    if (!name || !func) {
      throw new Error("To listen, you must provide an event name and a callback");
    }
    if (!listeners[name]) {
      listeners[name] = [];
    }
    listeners[name].push(func);
  }

  function say(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (!listeners[name]) {
      return;
    }
    listeners[name].forEach(function(func) {
      setTimeout(function() {
        func.apply(window, args);
      },0);
    });
  }

  window.Whisper = {
    say: say,
    listen: listen
  };

})();
