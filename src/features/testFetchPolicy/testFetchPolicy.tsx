"use client";

import { useQueryFetchBoards } from "../../entities/boards/useQueryBoards";
import { CSSProperties } from "react";

// 전체 컨테이너 스타일
const Wrap: CSSProperties = {
  width: "500px",
  // height: "400px",
  border: "2px solid lightgray",
  borderRadius: "10px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 상단부터 시작하도록 변경
  alignItems: "center",
  padding: "20px", // 내부 여백 추가
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과
  // overflowY: "auto", // 데이터가 많아지면 스크롤
};

// 헤더 스타일
const HeaderWrap: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#f5f5f5", // 연한 회색 배경
  borderBottom: "2px solid #e0e0e0", // 구분선
  fontWeight: "bold",
  color: "#333",
};

// 게시물 행 스타일
const BoardsWrap: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  borderBottom: "1px solid #e8e8e8", // 행마다 얇은 구분선
  transition: "background-color 0.2s", // 호버 효과 부드럽게
};

// 개별 열 스타일 (필요 시 세부 조정 가능)
const Column: CSSProperties = {
  flex: 1, // 각 열이 균등하게 공간 차지
  textAlign: "center", // 텍스트 가운데 정렬
};

export default function TestFetchPolicy() {
  const { data, loading, error } = useQueryFetchBoards();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={Wrap}>
      {/* 헤더 */}
      <div style={HeaderWrap}>
        <div style={Column}>ID</div>
        <div style={Column}>TITLE</div>
        <div style={Column}>WRITER</div>
      </div>
      {/* 게시물 목록 */}
      {data?.fetchBoards.map((el: any) => (
        <div
          key={el._id}
          style={{
            ...BoardsWrap,
          }}
        >
          <div style={Column}>{el._id.slice(-4)}</div>
          <div style={Column}>{el.title}</div>
          <div style={Column}>{el.writer}</div>
        </div>
      ))}
    </div>
  );
}
