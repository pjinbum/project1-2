// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// json 연습
//   {
  
//   "posts": [
//     {
//       "id": 1,
//       "title": "json-server",
//       "author": "typicode"
//     }
//   ],
//   "comments": [
//     {
//       "id": 1,
//       "body": "some comment",
//       "postId": 1
//     }
//   ],
//   "profile": {
//     "name": "typicode"
//   }
// }
//   ,


// <div>
// {/* 게시물 목록 표시 */}
// {/* (현재 페이지와 페이지당 게시물 수를 기반으로 게시물 목록을 표시) */}
// <ul>
//   {Array.from({ length: postsPerPage }).map((_, index) => (
//     <li key={index}>{`Page ${index + 1 + (currentPage - 1) * postsPerPage}`}</li>
//   ))}
// </ul>
// {/* 페이징 컴포넌트 표시 */}
// <div>
//   <button
//     onClick={() => handlePageChange(currentPage - 1)}
//     disabled={currentPage === 1}
//   >
//     이전
//   </button>
//   <span>{`현재 페이지: ${currentPage} / 총 페이지: ${totalPages}`}</span>
//   <button
//     onClick={() => handlePageChange(currentPage + 1)}
//     disabled={currentPage === totalPages}
//   >
//     다음
//   </button>
// </div>
// </div>
import '@testing-library/jest-dom';
