import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

// reducer가 여러개 생길때를 대비해서 아래처럼 combine
const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;