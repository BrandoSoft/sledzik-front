import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { deviceSize } from "../../components/responsive/responsive";


// const Title = styled.h1`
// font-weight: 900;
// color: #000;
// `;

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`;

const HidAndCatsContainer = styled.div`
  width: 80%;
  min-height: 5%;
  background-color: ;
`

export function UserPage() {
  return (
    <PageContainer>
        <Navbar/>
      <InnerPageContainer>
        {'asdasdasdasd'}
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
