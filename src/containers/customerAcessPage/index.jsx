import React from "react";
import { useParams } from "react-router";

import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function CustomerAccessPage() {
  const { action } = useParams();



  return (
    <PageContainer>
      <Navbar />
      <StyledInnerContainer>
        <AccountBox initialActive={action} />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}
