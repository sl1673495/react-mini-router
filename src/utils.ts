// 参考 https://github.com/ReactTraining/react-router
export interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export function parsePath(path: string) {
  let partialPath = {} as Path;

  if (path) {
    let hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
      partialPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf('?');
    if (searchIndex >= 0) {
      partialPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      partialPath.pathname = path;
    }
  }

  return partialPath;
}

export const readOnly: <T extends unknown>(obj: T) => Readonly<T> = obj =>
  Object.freeze(obj);
