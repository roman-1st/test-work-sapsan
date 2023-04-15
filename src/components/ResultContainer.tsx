import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./ResultContainer.css";
import ModalImage from "./ModalImage";

const ResultContainer = () => {
  const { images, modalImage } = useTypedSelector((state) => state.images);
  const { closeModalAction } = useActions();

  function closeModal() {
    closeModalAction();
  }

  return (
    <div className="DisplayResult">
      {images.map((el) => (
        <ModalImage key={el.id} el={el} />
      ))}
      {modalImage !== null ? (
        <div className="modalImageContainer">
          <img className="modalImage" src={modalImage.urls.regular} />
          <div onClick={() => closeModal()} className="closeModal">
            {" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultContainer;
