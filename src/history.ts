import { readOnly, parsePath } from './utils';

export interface history {
  push(): void;
}

export type State = object | null;

export enum Action {
  Pop = 'POP',
  Push = 'Push',
}

export type Listener = ({
  action,
  location,
}: {
  action: Action;
  location: Location;
}) => any;

export interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export interface Location<S extends State = State> extends Path {
  state: S;
}

function getNextLocation(to: string, state: State = null) {
  return readOnly({
    ...parsePath(to),
    state,
  });
}

function push(to: string, state?: State) {
  const nextAction = Action.Push;
  const nextLocation = getNextLocation(to, state);
  window.history.pushState(state, '', to);
  listeners.forEach(cb => cb({ action: nextAction, location: nextLocation }));
}

// 存储 history.listen 的回调函数
let listeners: Listener[] = [];
function listen(fn: Listener) {
  listeners.push(fn);
  return function() {
    listeners = listeners.filter(listener => listener !== fn);
  };
}

export const history = {
  get location() {
    return location;
  },
  push,
  listen,
};
