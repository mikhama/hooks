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
        <ClassCounter value={value} />
        <HookCounter value={value} />
      </div>
    );
  }
  return <button type="button" onClick={() => setVisible(true)}>show</button>;
};

// eslint-disable-next-line react/prefer-stateless-function
class ClassCounter extends Component {
  componentDidMount() {
    console.log('Class: mount');
  }

  componentDidUpdate() {
    console.log('Class: update');
  }

  componentWillUnmount() {
    console.log('Class: unmount');
  }

  render = () => {
    const { value } = this.props;

    return <p>{value}</p>;
  }
}

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('Hook: useEffect() works as componentDidMount');
  }, []);

  useEffect(() => {
    console.log('Hook: useEffect() works as componentDidMount + componentDidUpdate');
  });

  useEffect(() => {
    console.log('Hook: useEffect()');
    return () => console.log('Hook: useEffect() works almost as componentWillUnmount');
  }, [value]);

  return <p>{value}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
