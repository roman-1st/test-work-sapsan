import React from 'react';
import './App.css';
import ResultContainer from './components/ResultContainer';
import SearchContainer from './components/SearchContainer'
import { useTypedSelector } from './hooks/useTypedSelector';


function App() {
  const {isLoading, images, noGetImages} = useTypedSelector(state => state.images)
  const styleSearchBlock = {
    height: isLoading || images.length > 0 || noGetImages? "104px" : "340px"
  }

  return (
    <div className="App">
      <div
        style={styleSearchBlock}
        className="container"
      >
        <div 
        style={{
          display: isLoading || images.length > 0 || noGetImages ? 'block' : 'flex',
        }}
        className='searchContainer1'>
        <SearchContainer />
        </div>
       
      </div>
      {isLoading ? (
        <div className="LoaderContainer">
          <div className="Loader" />
        </div>
      ) : (
        <div>
          <ResultContainer />
        </div>
      )}
    </div>
  );
}

export default App;
