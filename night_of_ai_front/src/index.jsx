import React from 'react';
import ReactDOM from 'react-dom/client'; // 최신 React에서는 createRoot 사용
import RoomPage from './pages/RoomPage'; // RoomPage 임포트

// createRoot를 사용해 최상위 컴포넌트 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RoomPage /> {/* 최상위 컴포넌트로 RoomPage 렌더링 */}
  </React.StrictMode>
);