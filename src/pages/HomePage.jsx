// import React from "react";
// import { Link } from "react-router-dom";
// import { dummy_data } from "../data/dummy_data";

// function HomePage() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//       <Link to="detail/1">1번 페이지</Link>
//       <Link to="detail/2">2번 페이지</Link>
//       <Link to="detail/3">3번 페이지</Link>
//     </div>
//   );
// }

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from '../components/HomePageHeader';
import HomePageCard from '../components/HomePageCard';
import { dummy_data } from "../data/dummy_data";
import styled from 'styled-components';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: white;
  
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-auto-flow:column;
  justify-content: center;
  max-width: 1200px;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <HomePageHeader />
      <CardContainer>
        {dummy_data.map(card => (
          <div key={card.postID}>
            <Link to={`detail/${card.postID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <HomePageCard
                title={card.title}
                content={card.content}
                thumbnail={card.thumbnail}
                createdAt={card.createdAt}
                photo={card.photo}
                writer={card.writer}
              />
            </Link>
          </div>
        ))}
      </CardContainer>
    </StyledHomePage>
  );
}

export default HomePage;