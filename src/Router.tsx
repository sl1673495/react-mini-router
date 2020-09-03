import React, { useState, useEffect, ReactNode } from 'react';
import { history, Location } from './history';

interface RouterContextProps {
  history: typeof history;
  location: Location;
}

const RouterContext = React.createContext<RouterContextProps | null>(null);

const Router: React.FC = ({ children }) => {
  const [location, setLocation] = useState(history.location);
  // 初始化的时候 订阅 history 的变化
  useEffect(() => {
    const unlisten = history.listen(location => {
      setLocation(location);
    });
    return unlisten;
  }, []);

  return (
    <RouterContext.Provider value={{ history, location }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
