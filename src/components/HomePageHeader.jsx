import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1038px;
  justify-content: space-between;
  padding: 0px 10px 20px 10px;
  background-color: white;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 수직으로 아이템 가운데 정렬 */
  width: 100%;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5em;
  margin-right: 10px;
`;

const ButtonRow1 = styled.div`
  display: flex;
  align-items: center;
  gap:12px;
`;

const LoginButton = styled.button`
  padding: 5px 16px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownSelect = styled.select`
  margin-left: 10px;
  margin-right: 10px;
  width: 90px;
  height: 25px;
  padding: 0px 8px;
  border-radius: 4px;
  font-weight: bold;
`;

const Words = styled.div`
  margin-left: 6px;
  margin-right: 10px;
`;


const DropdownOption = styled.option``;

const HomePageHeader = () => {
  return (
    <HeaderContainer>
      <TopRow>
        <LogoContainer>
          <LogoText>Velog</LogoText>
        </LogoContainer>
        <ButtonRow1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 3a2 2 0 0 0-2 2c0 .086.02.168.031.25C10.574 6.133 8 9.273 8 13v9c0 .566-.434 1-1 1H6v2h7.188A2.95 2.95 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a2.95 2.95 0 0 0-.188-1H26v-2h-1c-.566 0-1-.434-1-1v-8.719c0-3.758-2.512-7.11-6.031-8.031c.011-.082.031-.164.031-.25a2 2 0 0 0-2-2m-.438 4c.145-.012.29 0 .438 0h.188C19.453 7.098 22 9.96 22 13.281V22c0 .352.074.684.188 1H9.813A2.95 2.95 0 0 0 10 22v-9a6.005 6.005 0 0 1 5.563-6zM16 25c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"/>
          </svg>
          <LoginButton>로그인</LoginButton>
        </ButtonRow1>
      </TopRow>
      <BottomRow>
        <DropdownContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 3.5h4v4"/>
              <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"/>
            </g>
          </svg>
          <Words style={{ fontWeight: 'bold' }}>트렌딩</Words>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/>
          </svg>
          <Words>최신</Words>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8l3 3l3-3a4.237 4.237 0 0 0-6 0m-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"/>
          </svg>
          <Words>피드</Words>
        </DropdownContainer>
        <IconContainer>
          <DropdownSelect>
            <DropdownOption>이번 주</DropdownOption>
            <DropdownOption>이번 달</DropdownOption>
            <DropdownOption>오늘</DropdownOption>
            <DropdownOption>올해</DropdownOption>
          </DropdownSelect>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01"/>
          </svg>
        </IconContainer>
      </BottomRow>
    </HeaderContainer>
  );
};

export default HomePageHeader;
