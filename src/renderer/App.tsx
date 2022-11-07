import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Click
      </button>
      <p>{count}</p>
    </div>
  );
}
