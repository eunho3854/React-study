// useRef (디자인)
import { useEffect, useRef } from 'react';

function App() {
  const myRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
    myRef.current.style.backgroundColor = 'black';
  }, []);

  return (
    <div>
      <input type="text" value={'안녕'} ref={myRef}></input>
      <div ref={boxRef}>박스</div>
      <button
        onClick={() => {
          boxRef.current.style.backgroundColor = 'red';
        }}
      >
        박스 색깔 변경
      </button>
    </div>
  );
}

export default App;
