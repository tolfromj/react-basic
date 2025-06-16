import React, { useState, useEffect } from 'react';

function CounterDisplay() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // useEffect: count 값이 변경될 때마다 실행
  useEffect(() => {
    // 1. 이펙트 설정 (부수 효과)
    console.log(`[EFFECT] count가 ${count}로 업데이트되었습니다. 새로운 타이머 시작.`);
    setMessage(`현재 카운트: ${count}`);

    // count가 변경될 때마다 1초 간격으로 로그를 남기는 타이머 설정
    const timerId = setInterval(() => {
      console.log(`  [TIMER] 현재 카운트 값: ${count}`);
    }, 1000);

    // 2. 클린업 함수 반환
    return () => {
      console.log(`[CLEANUP] 이전 count 값 ${count}에 대한 타이머를 정리합니다.`);
      clearInterval(timerId); // 이전 타이머 정리
    };
  }, [count]); // 의존성 배열: count가 변경될 때마다 이펙트 재실행

  // 컴포넌트 언마운트 시 클린업 동작을 보기 위한 별도의 useEffect (선택 사항)
  useEffect(() => {
    return () => {
      console.log('[COMPONENT UNMOUNT] CounterDisplay 컴포넌트가 사라집니다.');
    };
  }, []); // 빈 배열: 언마운트 시 한 번만 실행

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1>useEffect 의존성 배열 예시</h1>
      <p>카운트: {count}</p>
      <p>{message}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        카운트 증가
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        카운트 초기화
      </button>
    </div>
  );
}

// 이 컴포넌트를 부모 컴포넌트에 포함시켜야 합니다.
// 예를 들어 App.js에 넣을 수 있습니다.
function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? '카운터 숨기기' : '카운터 보이기'}
      </button>
      {showCounter && <CounterDisplay />}
    </div>
  );
}

export default App;