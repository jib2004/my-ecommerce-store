import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userAuthApi } from './api/users/auth';
import userSliceReducer from './api/userSlice/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist'; // Corrected import
import { sellerApi } from './api/users/seller';

const rootReducer = combineReducers({
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [sellerApi.reducerPath]: sellerApi.reducer,
    user: userSliceReducer,
    
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['userAuthApi','sellerApi']
};

const persistantReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistantReducer, // Corrected reducer assignment
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            userAuthApi.middleware,
            sellerApi.middleware
        ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);