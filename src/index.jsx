import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button type="button" onClick={() => setValue((v) => v + 1)}>+</button>
        <button type="button" onClick={() => setVisible(false)}>hide</button>
        <Notification />
      </div>
    );
  }
  return <button type="button" onClick={() => setVisible(true)}>show</button>;
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);

  return <p>{value}</p>;
};

const Notification = () => {
  const [message, setMessage] = useState('hello');

  useEffect(() => {
    const timeoutId = setTimeout(() => setMessage(''), 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return <p>{message}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
