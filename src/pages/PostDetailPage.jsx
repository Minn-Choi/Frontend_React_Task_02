import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailPageHeader from "../components/DetailPageHeader"; // DetailPageHeader를 import 합니다.
import { dummy_data } from "../data/dummy_data"; // dummy_data를 불러옵니다.

const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 768px;
  height: auto;
  gap: 20px;
  margin: 0px 250px;
  justify-items: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.h1`
  padding:50px 0px 0px 0px;
  font-size: 45px;
  margin-bottom: 5px;
  width:768px;
`;

const Content = styled.p`
  font-size: 1em;
  height: 40px;
  width:768px;
`;

const Thumbnail = styled.img`
  width: 768px;
  height: auto;
`;

const Writer = styled.p`
  font-size: 1em;
`;

const CreatedAt = styled.p`
  font-size: 1em;
`;

const Follow = styled.button`
  height:35px;
  padding: 8px 16px;
  background-color: #FFFFFF;
  color: #12B886;
  border: 1px solid #12B886;
  border-radius: 1rem;
  cursor: pointer;
`;

const Tags = styled.div`
  display: flex;
  width:768px;
  gap: 10px;
`;

const TagItem = styled.span`
  background-color: #f8f8f9;
  padding: 5px 10px;
  border-radius: 5px;
  color:#12B886;
`;

const MainContent = styled.div`
  font-size: 1em;
  width:768px;
`;

const Around = styled.div`
  display:flex;
  width:768px;
  flex-direction:row;
  font-size: 1em;
  justify-content: space-between;
`;
const Around2 = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  font-size: 1em;
  gap:10px;
`;

function PostDetailPage() {
  const { postID } = useParams(); // useParams 훅을 사용하여 postID를 가져옵니다.

  // postID에 해당하는 데이터를 dummy_data에서 찾습니다.
  const post = dummy_data.find((item) => item.postID === parseInt(postID));

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <DetailPageHeader /> {/* DetailPageHeader를 사용합니다. */}
      <HeaderContainer>
        <Title>{post.title}</Title>
        <Around>
          <Around2>
          <Writer style={{ fontWeight: 'bold' }}>{post.writer}</Writer> ·
          <CreatedAt>{post.createdAt}</CreatedAt>
          </Around2>
        <Follow>팔로우</Follow>
        </Around>
        <Tags>
          <TagItem>멋쟁이사자처럼</TagItem>
          <TagItem>프론트엔드</TagItem>
          <TagItem>합격후기</TagItem>
          <TagItem>react</TagItem>
        </Tags>
        <Content>{post.content}</Content>
        <Thumbnail src={post.thumbnail} alt="thumbnail" />
        <MainContent>{post.main}</MainContent>
      </HeaderContainer>
    </div>
  );
}

export default PostDetailPage;