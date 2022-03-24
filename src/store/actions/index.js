import axios from 'axios';
import { TOGGLE_SIDEBAR, TOGGLE_MODE } from './types';

export const toggleSidebar = () => {
    return {
      type: TOGGLE_SIDEBAR
    };
};

export const toggleMode = () => {
  return {
    type: TOGGLE_MODE
  };
};