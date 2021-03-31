import { useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

const on = (obj, ...args) => obj.addEventListener(...args);

const off = (obj, ...args) => obj.removeEventListener(...args);

export const useClickOutside = (
  ref,
  onClickOutside,
  events = defaultEvents,
) => {
  const savedCallback = useRef(onClickOutside);

  useEffect(() => {
    savedCallback.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};
