## Router

```tsx
import React, { useEffect } from 'react';
import { Router, Route, useHistory } from 'react-mini-router';

const Page = ({ children }) => (
  <div style={{ padding: '12px 0' }}>{children}</div>
);
const Foo = () => <Page>foo</Page>;
const Bar = () => <Page>bar</Page>;
const Baz = () => <Page>baz</Page>;

const Links = () => {
  const history = useHistory();

  const go = (path: string) => {
    const state = { name: path };
    history.push(path, state);
  };

  return (
    <div className="demo">
      <button onClick={() => go('foo')}>foo</button>
      <button onClick={() => go('bar')}>bar</button>
      <button onClick={() => go('baz')}>baz</button>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Router>
        <Links />
        <Route path="foo">
          <Foo />
        </Route>
        <Route path="bar">
          <Bar />
        </Route>
        <Route path="baz">
          <Baz />
        </Route>
      </Router>
    </div>
  );
};
```
