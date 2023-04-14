import React from 'react';
import './App.css';
import DisplayResult from './components/DisplayResult';
import SearchContainer from './components/SearchContainer'
import { useTypedSelector } from './hooks/useTypedSelector';


function App() {
  const {isLoading, images, noGetImages} = useTypedSelector(state => state.images)
  const loader: string = "./images/inputImage.svg"

  const styleSearchBlock = {
    height: isLoading || images.length > 0 || noGetImages? "104px" : "340px"
  }

  return (
    <div className="App">
      <div
        style={styleSearchBlock}
        className="container"
      >
        <SearchContainer />
      </div>
      {isLoading ? (
        <div className="LoaderContainer">
          <div className="Loader" />
        </div>
      ) : (
        <div>
          <DisplayResult />
        </div>
      )}
    </div>
  );
}

export default App;
