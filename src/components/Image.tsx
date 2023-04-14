import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import './Image.css'

interface Image {
    el: any,
}

const Image = (element: Image) => {
    const {openModalAction} = useActions()

    const elem = element.el

    function setModal () {
        openModalAction(elem)
    }

    return (
      <div 
      onClick={ () => setModal()}
      className="displayElement" 
      style={{}}
      key={elem.id}>
        <img className="img" src={elem.urls.regular} />
      </div>
    );
}

export default Image