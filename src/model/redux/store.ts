import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;