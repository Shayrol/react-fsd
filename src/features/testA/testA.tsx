import React from "react";
import { gql, useQuery } from "@apollo/client";

interface IBoardsTest {
  _id: string;
  writer: string;
  title: string;
  contents: string;
}

// boards에 사용한 useQueryFetchBoards()는 contents가 없어 여기서의 API 요청은
// contents를 포함해 다시 api 요청을 한다.
// 하지만 반대로 이동을 하면 캐싱 데이터를 사용함
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function TestA() {
  const { data, loading, error } = useQuery(FETCH_BOARDS);

  console.log("TestA 리렌더링");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>API 요청 캐싱 확인(ID)</p>
      {data?.fetchBoards.map((el: IBoardsTest) => (
        <div key={el._id}>
          <div>{el._id.slice(-4)}</div>
        </div>
      ))}
    </div>
  );
}
