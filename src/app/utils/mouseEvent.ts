const mouseEvent = {
  wheel(opt: MouseEventMoudle.WheelOption): void {
    if (!opt.target) {
      return;
    }
    const callback =
      opt.callback ||
      function () {
        return 0;
      };
    const target = opt.target || document;
    // 获取兼容事件
    const mouseWheel = /Firefox/i.test(navigator.userAgent)
      ? 'DOMMouseScroll'
      : 'mousewheel';

    // IE
    if ((document as MouseEventMoudle.DocumentIE).attachEvent) {
      (document as MouseEventMoudle.DocumentIE).attachEvent(
        'on' + mouseWheel,
        function (e: MouseEventMoudle.EventIE) {
          e.preventDefault();
          callback(e, e.wheelDelta);
        },
        { passive: false }
      );
    }

    // FF、Chrome、Opera、safari
    else {
      (document as MouseEventMoudle.DocumentFF).addEventListener(
        'mouseWheel',
        function (e: MouseEventMoudle.EventFF) {
          e.preventDefault();
          console.log(e.target.parentElement, target);
          e = e || (window.event as MouseEventMoudle.EventFF);
          if (e.detail) {
            // FF
            callback(e, e.detail * 40);
          } else {
            callback(e, e.wheelDelta);
          }
        },
        { passive: false }
      );
    }
  },
};

export { mouseEvent };
