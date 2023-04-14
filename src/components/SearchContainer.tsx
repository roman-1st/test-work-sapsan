import React, { useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./SearchContainer.css";

const SearchContainer = () => {
  const { setRequesTitleAction, getFetchImagesAction } = useActions();
  const { requestTitle, isLoading, images, noGetImages } = useTypedSelector(
    (state) => state.images
  );

  const title = useRef<HTMLInputElement>(null);
  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setRequesTitleAction(String(title.current?.value));
  }

  function getImages() {
    getFetchImagesAction(requestTitle);
  }

  function search(e: any) {
    if (e.keyCode == 13) getFetchImagesAction(requestTitle);
  }

  return (
    <div
      style={{ 
        bottom: noGetImages ? '-59px' : '0',
        width: images.length > 0 || isLoading || noGetImages ?  "" : "auto"
    }}
      className="SearchContainer"
    >
      <div className="inputContainer">
        <div className="inputContainer2">
            <span className="iconLeft" />
            <input
            ref={title}
            onChange={(e) => setTitle(e)}
            onKeyDown={(e) => search(e)}
            type="text"
            className="textInputField"
            placeholder="Телефоны, яблоки, груши..."
            />
        </div>
        
        <button onClick={(e) => getImages()} className="getFetch">
          {" "}
          Искать
        </button>
      </div>
      <div 
      style={{
        display: noGetImages ? 'block' : "none",
      }}
      className="noResult">
        <p> Поиск не дал результатов </p>
      </div>
    </div>
  );
};

export default SearchContainer;
