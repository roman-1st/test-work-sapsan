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
    GET_IMAGES = "GET_IMAGES",
    LOADING_IMAGES = "LOADING_IMAGES",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
    ERROR_MESSAGE = "ERROR_MESSAGE"
}

interface setRequestTitle {
    type: ImagesActionTypes.SET_REQUEST_TITLE,
    payload: string,
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
    setRequestTitle |
    getImageAction |
    loadingImagesAction |
    openModalAction |
    closeModalAction