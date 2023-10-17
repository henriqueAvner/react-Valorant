import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import user from './reducers/userReducer';

const store = createStore(user, composeWithDevTools());
// store - responsável por salvar o estado global da aplicação.
// 2 argumentos - reducer, para escrever/alterar o estado global
// composewithdevtools - para utilizar a ferramenta de vizualizar
// o estado

export default store;
