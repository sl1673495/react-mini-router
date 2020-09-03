## history

history 对 `window.history` API 进行了一层封装，拥有 `push`、`listen` API。

```tsx
import React, { useEffect } from 'react';
import { history } from 'react-mini-router';
import './style.css';

export default () => {
  const go = (path: string) => {
    const state = { name: path };
    history.push(path, state);
  };

  useEffect(() => {
    history.listen(location => {
      console.log('location', location);
    });
  }, []);

  return (
    <div className="demo">
      <h1>History</h1>

      <p>点击按钮后，url 会发生变化</p>
      <button onClick={() => go('foo')}>foo</button>
      <button onClick={() => go('bar')}>bar</button>
      <button onClick={() => go('baz')}>baz</button>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
