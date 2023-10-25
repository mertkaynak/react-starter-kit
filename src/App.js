import { useEffect } from 'react';
import logo from './logo.svg';

function App() {

  useEffect(() => {
    if(process.env.NODE_ENV === "production"){
      // analytics'i bilgilendir.
    }
  })
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
          <img src="logo192.png" />
          <img src={logo} />
        </>
      )}
    </div>
  );
}

export default App;
