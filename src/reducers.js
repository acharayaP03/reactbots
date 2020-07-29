import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField : '',
}

const initialStateRobots = {
    isPending : true,
    robots : []
}


//searchField Reducer: this will preserve the initial state of the app whilst creating new obj without mutating the initial state.

export const searchRobots = ( state=initialStateSearch, action={}) =>{
    //console.log(action.type)

    switch( action.type){
        case  CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField : action.payload })
            //return { ...state, searchField: action.payload };
        default: 
            return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={})=>{

    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending : true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots : action.payload, isPending : false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload});
        default:
            return state;
    }
}

