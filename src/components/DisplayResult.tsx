import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import './DisplayResult.css'
import Image from "./Image";

const DisplayResult = () => {
    const {images, modalImage} = useTypedSelector(state => state.images)
    const {closeModalAction} = useActions()
    console.log(modalImage);

    function closeModal () {
        closeModalAction()
    }
    
    return (
      <div className="DisplayResult">
        {images.map((el) => (
          <Image key={el.id} el={el} />
        ))}
        {modalImage !== null ? (
          <div className="modalImageContainer">
            <img 
            className="modalImage" src={modalImage.urls.regular} />
            <div 
            onClick={ () => closeModal()}
            className="closeModal"> </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default DisplayResult