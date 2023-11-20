import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>App.js calling API: {data}</div>;
}


//import React from 'react';

//function App() {
//  const value = 'World test1';
//  return <div>Hello {value}</div>;
//}

export default App;
