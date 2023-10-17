import { ACCES_VERIFIED } from '../actions/actions';

type ActionType = {
  type: string;
  payload: string,
};
// criando uma tipagem para a action;

const INITIAL_STATE = { user: '' };
// Declarando o estado inicial da aplicação, será uma variável;

function user(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case ACCES_VERIFIED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
export default user;
