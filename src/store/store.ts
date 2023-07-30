import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CubReducer from './reducers/cubReducer'

const rootReducer = combineReducers({
    CubReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
