import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    todo: () =>({
        description: 'Ler Livro'
    })
});

export default rootReducer;