import React, { useState, useMemo } from 'react';

function MemoHooks() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1000);

  const multiply = useMemo(() => {
    console.log('Multiply Function For Count State');
    return count * 10;
  }, [count]);

  return (
    <>
      <h2>useMemo Hook</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>

      <h3>Data: {data}</h3>
      <button onClick={() => setData(data * 10)}>Update Data</button>

      <h4>Result (count × 10): {multiply}</h4>
    </>
  );
}

export default MemoHooks;
