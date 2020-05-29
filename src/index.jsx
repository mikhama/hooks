import React, { Component, useState, useEffect, useCallback, useMemo } from 'react';
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

const getPlanet = async (id) => {
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  return res.json();
};

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    isLoading: true,
    error: null,
  }), []);

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);

    let cancelled = false;

    const fetchData = async () => {
      try {
        const data = await request();
        if (!cancelled) {
          setDataState({
            data,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setDataState({
            error,
            isLoading: false,
            data: null,
          });
        }
      }
    };

    fetchData();

    // eslint-disable-next-line no-return-assign
    return () => cancelled = true;
  }, [request, initialState]);

  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);

  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const { data, isLoading, error } = usePlanetInfo(id);

  if (error) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <p>
        {id}
        {' '}
        -
        {' '}
        {data && data.name}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
