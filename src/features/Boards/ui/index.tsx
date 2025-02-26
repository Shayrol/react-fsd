"use client";

import { useQueryFetchBoards } from "../../../entities/boards/useQueryBoards";
import { BoardsWrap, Column, HeaderWrap, Wrap } from "./styles";

interface IBoards {
  _id: string;
  writer: string;
  title: string;
}

export default function Boards() {
  const { data, loading, error } = useQueryFetchBoards();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ ...Wrap }}>
      {/* 헤더 */}
      <div style={{ ...HeaderWrap }}>
        <div style={{ ...Column }}>ID</div>
        <div style={{ ...Column }}>TITLE</div>
        <div style={{ ...Column }}>WRITER</div>
      </div>
      {/* 게시물 목록 */}
      {data?.fetchBoards.map((el: IBoards) => (
        <div
          key={el._id}
          style={{
            ...BoardsWrap,
          }}
        >
          <div style={{ ...Column }}>{el._id.slice(-4)}</div>
          <div style={{ ...Column }}>{el.title}</div>
          <div style={{ ...Column }}>{el.writer}</div>
        </div>
      ))}
    </div>
  );
}
