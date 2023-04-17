export interface ImagesState {
    requestTitle: string,
    isLoading: boolean,
    images: Image[],
    noGetImages: boolean,
    pageNumber: number,
    isPagination: boolean;
    modalImage: any | null ,
}

export interface Image {
    urls: any,
    id: string,
}

export enum ImagesActionTypes {
    SET_REQUEST_TITLE = "SET_REQUEST_TITLE",
    REMOVE_REQUEST_TITLE = "REMOVE_REQUEST_TITLE",
    GET_IMAGES = "GET_IMAGES",
    GET_MORE_IMAGES = "GET_MORE_IMAGES",
    IS_PAGINATION = "IS_PAGINATION",
    LOADING_IMAGES = "LOADING_IMAGES",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
    ERROR_MESSAGE = "ERROR_MESSAGE",
}

interface setRequestTitleAction {
    type: ImagesActionTypes.SET_REQUEST_TITLE,
    payload: string,
}

interface removeRequestTitleAction {
    type: ImagesActionTypes.REMOVE_REQUEST_TITLE,
}

interface loadingImagesAction {
    type: ImagesActionTypes.LOADING_IMAGES,
}

interface getImageAction {
    type: ImagesActionTypes.GET_IMAGES,
    payload: Image[]
}

interface getMoreImagesAction {
    type: ImagesActionTypes.GET_MORE_IMAGES,
    payload: Image[],
}

interface isPaginationAction {
    type: ImagesActionTypes.IS_PAGINATION,
}

interface openModalAction {
    type: ImagesActionTypes.OPEN_MODAL,
    payload: any,
}

interface closeModalAction {
    type: ImagesActionTypes.CLOSE_MODAL,
}

export type ImagesActions =
    setRequestTitleAction |
    removeRequestTitleAction |
    getImageAction |
    isPaginationAction |
    getMoreImagesAction |
    loadingImagesAction |
    openModalAction |
    closeModalAction