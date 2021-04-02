import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/navbar/navbar';
import { InnerPageContainer, PageContainer } from '../../components/PageContainer'
import { deviceSize } from '../../components/responsive/responsive';
import { Services } from './services';
import { TopSection } from './topSection';

// const Title = styled.h1`
// font-weight: 900;
// color: #000;
// `;

const ContentContainer = styled.div`
width:100%;
max-width: ${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items: flex-start;
`;




export function HomePage(props) {
    return (
        < PageContainer >
            <TopSection>
                <Navbar/>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                <Services/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer >
    )
}