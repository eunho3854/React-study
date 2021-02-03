import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const [post, setPost] = useState({
    id: 5,
    title: '',
    content: '',
  });

  const handleWrite = (e) => {
    e.preventDefault(); // form태그가 하려는 액션을 중지 시켜야 함.
    setPosts([...posts, { ...post, id: post.id + 1 }]);
    setPost({ ...post, id: post.id + 1 });
  };

  const handleForm = (e) => {
    // computed property names(키값 동적할당)
    // post가 처음에 title이 업데이트 되고 그 다음에 content가 없데이트 되면서
    // title이 날라간다. 그래서 ...post를 호출하여 변한 값과 같이 없데이트 해주어야 한다.
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post.title);
    console.log(post.content);
  };

  // 삭제하기
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((posts) => (
        <StyledItemBoxDiv>
          <div>
            번호: {posts.id} / 제목 : {posts.title} / 내용 : {posts.content}
          </div>
          <button onClick={() => handleDelete(posts.id)}>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
