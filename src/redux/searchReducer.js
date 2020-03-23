import { SET_ARTICLES } from './types'

const initialState = {
    
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ARTICLES: 
            return { ...state, ...[action.payload.query.search]}
        default:
            return state
    }
} 