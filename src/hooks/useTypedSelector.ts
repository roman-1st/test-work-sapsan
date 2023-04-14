import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../redux/reducer/rootReducer"

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector 