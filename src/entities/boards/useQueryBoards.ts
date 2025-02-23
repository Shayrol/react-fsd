"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export const useQueryFetchBoards = () => {
  const result = useQuery(FETCH_BOARDS);

  return result;
};
