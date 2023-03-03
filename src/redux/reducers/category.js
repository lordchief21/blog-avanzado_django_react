import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL
} from '../actions/types'

const initialState = {
    categories : null,
    

}

export default function categoryReducer(state = initialState, action) {
    
    const {type,payload} = action;
    
    switch(type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories : payload.categories
               
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state
            }
        
        default: return state
    }
}