import { ImagesState, ImagesActionTypes, ImagesActions } from '../../types/images';

const initialState: ImagesState = {
    requestTitle: '',
    isLoading: false,
    images: [],
    noGetImages: false,
    pagination: 10,
    modalImage: null,
}

export const imagesReducer = (state = initialState, action: ImagesActions): ImagesState => {
    switch (action.type) {
        case ImagesActionTypes.SET_REQUEST_TITLE:
            return {
                ...state,
                requestTitle: action.payload
            }

        case ImagesActionTypes.REMOVE_REQUEST_TITLE:
            return {
                ...state,
                requestTitle: '',
            }

        case ImagesActionTypes.LOADING_IMAGES:
            return {
                ...state,
                isLoading: true,
            }

        case ImagesActionTypes.GET_IMAGES:
            if (action.payload.length > 0) {
                return {
                    ...state,
                    isLoading: false,
                    images: [...action.payload],
                    noGetImages: false,
                }
            }
            if (action.payload.length === 0) {
                return {
                    ...state,
                    isLoading: false,
                    images: [],
                    noGetImages: true,
                }
            }
            return {
                ...state,
            }

        case ImagesActionTypes.OPEN_MODAL:
            return {
                ...state,
                modalImage: action.payload
            }
        case ImagesActionTypes.CLOSE_MODAL:
            return {
                ...state,
                modalImage: null,
            }

        default:
            return {
                ...state
            }
    }
}