import actionTypes from "./actionTypes";

interface TypeInitialState {
    text: string,
}

const initialState: TypeInitialState = {
    text: "Teste Funcionando com sucesso!!"
}

interface Action {
    type: string;
    payload?: any;
}

const testeReducer = (state: TypeInitialState = initialState, action:Action): TypeInitialState => {
    switch (action.type) {
        case actionTypes.ATUALIZAR:
            return {...state, text: "Teste alterado com sucesso!!"};
        default:
            return state;
    }
}

export default testeReducer;