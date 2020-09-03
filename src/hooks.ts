import { useContext } from 'react';
import { RouterContext } from './Router';

export const useHistory = () => {
  return useContext(RouterContext)!.history;
};

export const useLocation = () => {
  return useContext(RouterContext)!.location;
};
