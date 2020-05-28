import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => <HookSwitcher />;

const HookSwitcher = () => {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{
      fontSize,
      padding: '10px',
      backgroundColor: color,
    }}
    >
      <p>Font Size</p>
      <button type="button" onClick={() => setColor('gray')}>Dark</button>
      <button type="button" onClick={() => setColor('white')}>Light</button>
      <button type="button" onClick={() => setFontSize((s) => s + 2)}>Inc Font Size</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
