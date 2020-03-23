import { SET_ARTICLES } from './types'

export const setArticles = (data) => {
    return {
        type: SET_ARTICLES,
        payload: data
    }
}

export const fetchReguest = (text) => {
    return async dispatch => {
        try {
            const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${text}`
            const response = await fetch(endpoint)
            const data = await response.json()
            dispatch(setArticles(data))
        } catch(e) {
            console.log(e)
        }
    }
}