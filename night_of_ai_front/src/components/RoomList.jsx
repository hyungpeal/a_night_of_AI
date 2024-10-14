import React from 'react';
import styled from 'styled-components';

// 룸 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%; /* 상단 여백 추가 */
`;

const Room = styled.div`
  margin: 1.5%;
  padding: 2%;  
  background-color: #BABABA;
  border-radius: 50px;
  width: 80%; /* 기본 너비: 80% */
  max-width: 600px; 
  text-align: left; /* 텍스트 왼쪽 정렬 */
  font-size: 1.2rem; /* 기본 폰트 크기를 rem으로 설정 */
  padding-left: 2rem; /* 기본 왼쪽 패딩을 rem으로 설정 */
  cursor: pointer;
  font-weight: bold; 
  
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #ddd; 
  }

  /* 미디어 쿼리 추가 */
  @media (max-width: 768px) {
    width: 90%; /* 작은 화면에서는 너비를 90%로 설정 */
    font-size: 4vw; /* 작은 화면에서 폰트 크기를 vw 단위로 설정 */
    padding-left: 5%; /* 작은 화면에서 왼쪽 패딩을 % 단위로 설정 */
  }

  @media (min-width: 769px) {
    font-size: 1.5rem; /* 큰 화면에서는 폰트 크기를 rem으로 설정 */
    padding-left: 2rem; /* 큰 화면에서 왼쪽 패딩을 rem으로 설정 */
  }
`;

const RoomList = () => {
  return (
    <Container>
      <Room>방 1</Room>
      <Room>방 2</Room>
      <Room>방 3</Room>
      <Room>방 4</Room>
      <Room>방 5</Room>
    </Container>
  );
};

export default RoomList;