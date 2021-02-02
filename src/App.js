// useRef (디자인)
// dom을 변경할 때 사용
import { useEffect, useRef } from 'react';

function App() {
  const myRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
    </div>
  );
}

export default App;
