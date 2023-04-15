import { imagesReducer } from './imagesReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    images: imagesReducer,
})

export type RootState = ReturnType<typeof rootReducer>