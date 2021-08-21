import { createStore } from "redux";
import { rootReducer } from "./store/reducer/indexReducer";


export const store = createStore(rootReducer);