import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => (
  <MyContext.Provider value="Hello guys">
    <Child />
  </MyContext.Provider>
);

const Child = () => {
  const value = useContext(MyContext);

  return <p>{value}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
