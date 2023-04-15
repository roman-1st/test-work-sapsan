import { ImagesActionTypes } from './../../types/images';
import React from "react";

export const setRequesTitleAction = (title: string) => {
    return {type: ImagesActionTypes.SET_REQUEST_TITLE, payload: title}
}

export const removeRequestTitleAction = () => {
    return {type: ImagesActionTypes.REMOVE_REQUEST_TITLE}
}

export const openModalAction = (image: any) => {
    return {type: ImagesActionTypes.OPEN_MODAL, payload: image}
}

export const closeModalAction = () => {
    return {type: ImagesActionTypes.CLOSE_MODAL}
}