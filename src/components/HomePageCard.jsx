import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.2s;
  width: 319.96px;
  height:380.66px;
  background-color:white;
  &:hover {
    transform: scale(1.02);
  }
`;

const Thumbnail = styled.img`
  width: 319.96px;
  height:166.99px;

`;

const Title = styled.h2`
  font-size: 1.1em;
  padding: 0px 15px;
  height:15px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  width:290px;
  font-size: 1em;
  height:50px;
  padding: 5px 15px;
  margin-bottom: 20px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
`;

const CreatedAt = styled.small`
  font-size: 0.8em;
  color: #555;
  padding: 0px 15px 0px 15px;
`;
const Photo = styled.img`
  font-size: 0.8em;
  color: #555;
  padding: 10px;
  width:30px;
  height:30px;
  border-radius: 30px;
`;
const Writer = styled.h3`
  font-size: 13px;
  color: #555;
  padding: 10px;
`;
const Around = styled.div`
  display:flex;
  flex-direction:row;
  color: #555;
  padding: 4px;
  align-items: center;

`;
const Around2 = styled.div`
  display:flex;
  flex-direction:row;
  color: #555;
  padding: 0px 5px 0px 130px;
  align-items: center;

`;
function HomePageCard({ title, content, thumbnail, createdAt, photo, writer}) {
  return (
    <Card>
      <Thumbnail src={thumbnail} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <CreatedAt>{createdAt}</CreatedAt>
      <Around>
      <Photo src={photo}/>by
      <Writer>{writer}</Writer>
      <Around2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/>
      </svg></Around2>73
      </Around>
    </Card>
  );
}

export default HomePageCard;