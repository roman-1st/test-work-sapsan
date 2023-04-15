import React, { useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./SearchContainer.css";

const SearchContainer = () => {
  const {
    setRequesTitleAction,
    removeRequestTitleAction,
    getFetchImagesAction,
  } = useActions();
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

  const removeRequestTitle = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement;
    if (target.classList.value === "inputBlock") {
      removeRequestTitleAction();
    }
  };

  return (
    <div
      style={{
        bottom: noGetImages ? "-59px" : "0",
        width: images.length > 0 || isLoading || noGetImages ? "" : "auto",
      }}
      className="SearchContainer"
    >
      <div className="inputContainer">
        <div className="inputContainer2">
          <span className="iconLeft" />
          <div className="inputBlock" onClick={(e) => removeRequestTitle(e)}>
            <input
              value={requestTitle}
              ref={title}
              onChange={(e) => setTitle(e)}
              onKeyDown={(e) => search(e)}
              type="text"
              className="textInputField"
              placeholder="Телефоны, яблоки, груши..."
            />
          </div>
        </div>

        <button onClick={(e) => getImages()} className="getFetch">
          {" "}
          Искать
        </button>
      </div>
      <div
        style={{
          display: noGetImages ? "block" : "none",
        }}
        className="noResult"
      >
        <p> К сожалению, поиск не дал результатов </p>
      </div>
    </div>
  );
};

export default SearchContainer;
