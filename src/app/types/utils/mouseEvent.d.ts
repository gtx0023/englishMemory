declare namespace MouseEventMoudle {
  interface DocumentIE extends Document {
    attachEvent: Function;
  }
  interface EventIE extends Event {
    target: EventTargetIE;
    wheelDelta: number;
  }
  interface EventTargetIE extends EventTarget {
    parentElement: EventTarget;
  }

  interface DocumentFFEventMap extends DocumentEventMap {
    DOMMouseScroll: EventFF;
    mouseWheel: EventFF;
  }
  interface DocumentFF extends Document {
    addEventListener<K extends keyof DocumentFFEventMap>(
      type: K,
      listener: (this: DocumentFF, ev: DocumentFFEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
  }
  interface EventFF extends Event {
    target: EventTargetIE;
    detail: number;
    wheelDelta: number;
  }
  interface WheelOption {
    target: EventTarget;
    callback: Function;
  }
}
