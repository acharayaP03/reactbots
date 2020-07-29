import { apiCall } from './API/Api'

import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) =>({
    type : CHANGE_SEARCH_FIELD,
    payload : text
})

export const requestRobots= () => (dispatch) =>{
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    dispatch({
        type: REQUEST_ROBOTS_PENDING
    })
    apiCall(usersUrl)
        .then(data => dispatch(
                {type: REQUEST_ROBOTS_SUCCESS, payload: data })
            )
        .catch( error => dispatch ({type: REQUEST_ROBOTS_FAILED, payload: error }))
}

