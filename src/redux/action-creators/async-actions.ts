import axios from "axios"
import { Dispatch } from "react"
import { ImagesActions, ImagesActionTypes } from "../../types/images"

export const getFetchImagesAction = (title: string) => {
    return async (dispatch: Dispatch<ImagesActions>) => {
        try {
            dispatch({type: ImagesActionTypes.LOADING_IMAGES})
            const response = await axios.get('https://api.unsplash.com/search/photos?', {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: title,
                    per_page: '30',
                }
            })
            setTimeout( () => {
                dispatch({type: ImagesActionTypes.GET_IMAGES, payload: response.data.results})
            }, 1000)
            
        } catch {

        }
    }
}

export const fetchMoreImagesAction = () => {                            //для пагинации
    return async (dispatch: Dispatch<ImagesActions>) => {
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos?', {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: '',
                    per_page: '',
                }
            })  
            
        } catch {

        }
    }
}