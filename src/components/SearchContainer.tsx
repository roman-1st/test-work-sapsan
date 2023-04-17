import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./SearchContainer.css";

const SearchContainer = () => {
  const {
    setRequesTitleAction,
    removeRequestTitleAction,
    getFetchImagesAction,
    getFetchMoreImagesAction,
    isPaginationAction,
  } = useActions();
  const { requestTitle, isLoading, images, noGetImages, isPagination, pageNumber } =
    useTypedSelector((state) => state.images);

  const title = useRef<HTMLInputElement>(null);
  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setRequesTitleAction(String(title.current?.value));
  }

  const removeRequestTitle = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const target = event.target as HTMLElement;
    if (target.classList.value === "inputBlock") {
      removeRequestTitleAction();
    }
  };

  function getImages() {
    getFetchImagesAction(requestTitle, pageNumber);
  }

  function search(e: any) {
    if (e.keyCode == 13) getFetchImagesAction(requestTitle, pageNumber);
  }

  const handleScroll = (
    title: string,
    currentPage: number
  ): ((event: Event) => void) => {
    return (event: any) => {
      if (
        !isPagination &&
        event.target.documentElement.scrollHeight -
          (event.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        event.target.documentElement.scrollHeight -
          (event.target.documentElement.scrollTop + window.innerHeight) >
          0
      ) {
        getFetchMoreImagesAction(title, currentPage + 1);
        isPaginationAction()
      }
    };
  };

  useEffect(() => {
    const scrollHandler = handleScroll(requestTitle, pageNumber);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isPagination]);

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
