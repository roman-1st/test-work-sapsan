import { ImagesState, ImagesActionTypes, ImagesActions } from '../../types/images';

const initialState: ImagesState = {
    requestTitle: '',
    isLoading: false,
    images: [],
    noGetImages: false,
    pageNumber: 1,
    isPagination: false,
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
                    requestTitle: state.requestTitle,
                    images: [...action.payload],
                    noGetImages: false,
                    pageNumber: 2,
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
        case ImagesActionTypes.GET_MORE_IMAGES:
            return {
                ...state,
                isLoading: false,
                images: [...state.images, ...action.payload],
                noGetImages: false,

                pageNumber: state.pageNumber + 1,
                isPagination: false,
            }
        case ImagesActionTypes.IS_PAGINATION:
            return {
                ...state,
                isPagination: true,
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