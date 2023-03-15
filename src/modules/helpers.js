const debounce = (callee, timeoutMs = 1000) => {
  return (...args) => {
    args.lastCall = Date.now();
    let previousCall = args.lastCall;
    if (previousCall && args.lastCall - previousCall <= timeoutMs) {
      clearTimeout(args.lastCallTimer);
    }
    args.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
};

export { debounce };
