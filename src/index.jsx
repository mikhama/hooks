import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button type="button" onClick={() => setValue((v) => v + 1)}>+</button>
        <button type="button" onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div>
    );
  }
  return <button type="button" onClick={() => setVisible(true)}>show</button>;
};

const PlanetInfo = ({ id }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      const res = await fetch(`https://swapi.dev/api/planets/${id}`);
      const { name: planetName } = await res.json();
      if (!cancelled) {
        setName(planetName);
      }
    };

    fetchData();

    // eslint-disable-next-line no-return-assign
    return () => cancelled = true;
  }, [id]);

  return (
    <div>
      <p>
        {id}
        {' '}
        -
        {' '}
        {name}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
