import { CHANGE_SEARCH_FIELD } from './constants';


const initialState = {
    searchField : '',
}

//searchField Reducer: this will preserve the initial state of the app whilst creating new obj without mutating the initial state.

export const searchRobots = ( state=initialState, action={}) =>{
    //console.log(action.type)

    switch( action.type){
        case  CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField : action.payload })
            //return { ...state, searchField: action.payload };
        default: 
            return state;
    }
}

