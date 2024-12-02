import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../features/Todo/TodoSlice';

const Store = configureStore({
    reducer : todoSlice
})
export default Store