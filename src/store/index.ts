// src/store.ts
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './createSlice/counter';

export const store = configureStore({
	reducer: {
		counter: counterReducer, // 注册 reducer
	},
});

// 类型导出
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
