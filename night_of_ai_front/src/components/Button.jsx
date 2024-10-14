import React from 'react';
import styled from 'styled-components'; // styled import

// 기본 버튼 스타일
const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; // 버튼 세로 정렬
  gap: 10px; // 버튼 사이의 간격
`;

// MyButton 컴포넌트 정의
export const MyButton = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// 여러 컴포넌트를 named export로