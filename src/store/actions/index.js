import axios from 'axios';
import { TOGGLE_SIDEBAR } from './types';

export const toggleSidebar = () => {
    return {
      type: TOGGLE_SIDEBAR
    };
};