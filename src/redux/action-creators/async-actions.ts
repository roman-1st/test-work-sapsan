import axios from "axios"
import { Dispatch } from "react"
import { ImagesActions, ImagesActionTypes } from "../../types/images"

export const getFetchImagesAction = (title: string, page: number) => {
    console.log('fetch');
    
    return async (dispatch: Dispatch<ImagesActions>) => {
        try {
            dispatch({type: ImagesActionTypes.LOADING_IMAGES})
            const response = await axios.get('https://api.unsplash.com/search/photos?', {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: title,
                    // rel: 'first',
                    page: page,
                    per_page: '20',
                    lang: 'ru',
                }
            })
            // setTimeout( () => {
                dispatch({type: ImagesActionTypes.GET_IMAGES, payload: response.data.results})
            // }, 1000)
            
        } catch (e: any){
            console.log(e.message);
        }
    }
}

export const getFetchMoreImagesAction = (title: string, page: number) => {   
    console.log('fetch');

    return async (dispatch: Dispatch<ImagesActions>) => {
        try {
            dispatch({type: ImagesActionTypes.LOADING_IMAGES})
            const response = await axios.get('https://api.unsplash.com/search/photos?', {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: title,
                    per_page: '20',
                    lang: 'ru',
                    page: page,
                    rel: 'next',
                }
            })  
            
            
            // setTimeout( () => {
                dispatch({type: ImagesActionTypes.GET_MORE_IMAGES, payload: response.data.results})
            // }, 1000)
            
        } catch (e: any){
            console.log(e.message);
        }
    }
}