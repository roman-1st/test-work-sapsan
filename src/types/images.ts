export interface ImagesState {
    requestTitle: string,
    isLoading: boolean,
    images: Image[],
    noGetImages: boolean,
    pagination: number,
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
    LOADING_IMAGES = "LOADING_IMAGES",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
    ERROR_MESSAGE = "ERROR_MESSAGE"
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
    loadingImagesAction |
    openModalAction |
    closeModalAction