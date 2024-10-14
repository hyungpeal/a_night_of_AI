import React, { useState } from 'react';
import styled from 'styled-components';
import RoomList from '../components/RoomList'; // RoomList 임포트

// 페이지 위치
const Page = styled.div`
  text-align: center;
  background: linear-gradient(180deg, #000000, #E1CCFF);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 페이지 스타일
const RoomContainer = styled.div`
  background-color: #cfcfcf;
  border-radius: 40px;
  padding: 20px;
  width: 70%;
  height: 70%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 그라데이션 */
`;

// 버튼 위치
const ButtonContainer = styled.div`
  display: flex;
  justify-content: right; /* 버튼을 양쪽에 배치 */
  margin-bottom: 20px; /* 아래쪽 여백 */
`;

// 버튼 스타일
const Button = styled.button`
  background-color: #D9D9D9;
  color: black;
  border: 1px solid #000000; /* 테두리 추가 */
  
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  margin-left: 10px; /* 버튼 사이에 공백 추가 */
  font-weight: bold; /* 글꼴 굵게 */
  &:hover {
    background-color: #3498db;
  }
`;

// 페이지 수 위치
const Pagination = styled.div`
  text-align: center;
  margin-top: 30px;
`;

// 페이지 수 스타일
const PageButton = styled.button`
  margin: 0 5px; /* 버튼 간격 */
  cursor: pointer;
  background: none;
  border: none;
  color: #00000;
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')}; /* 현재 페이지 글꼴 두께 */

  &:hover {
    text-decoration: underline; /* 호버 효과 */
  }
`;

const RoomPage = () => {
  // 더미 데이터 추가
  const [rooms, setRooms] = useState(['방 1', '방 2', '방 3']); // 예시 방 목록
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 1; // 페이지당 방 수
  const totalRooms = rooms.length; // 총 방 수
  const totalPages = Math.ceil(totalRooms / roomsPerPage); // 총 페이지 수

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Page>
      <RoomContainer>
        <ButtonContainer>
          <Button>내 방 보기</Button>
          <Button>방 만들기</Button>
        </ButtonContainer>
        <RoomList rooms={rooms.slice((currentPage - 1) * roomsPerPage, currentPage * roomsPerPage)} /> {/* RoomList에 현재 페이지의 방 목록 전달 */}
        <Pagination>
          {currentPage > 1 && (
            <PageButton onClick={() => handlePageChange(currentPage - 1)}>
              &lt;
            </PageButton>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1} // 현재 페이지 여부 확인
            >
              {index + 1}
            </PageButton>
          ))}
          {totalPages > 0 && currentPage < totalPages && (
            <PageButton onClick={() => handlePageChange(currentPage + 1)}>
              &gt;
            </PageButton>
          )}
        </Pagination>
      </RoomContainer>
    </Page>
  );
};

export default RoomPage;