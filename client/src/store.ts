import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from './api/users/auth'

export const store = configureStore({
    reducer:{
        [userAuthApi.reducerPath]:userAuthApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)