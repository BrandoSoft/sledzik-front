import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
width: ${({ width }) => (width ? width + "px" : "300px")};
border: none;
outline: none;
color: #fff;
padding: 10px 1em;
font-size: ${({ size }) => (size ? size + "px" : "18px")};
font-weight: 700;
border-radius: 5px;
background-color: #326295;
margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + "px" : "200px")};

cursor: pointer;
transition: all 200ms ease-in-out;

&:hover{
    background-color: #fff;
    color: #326295;
}

&:focus {
    outline: none;
}
`;

export function Button(props){
    const {marginLeft, size, width } = props;

    return <ButtonWrapper marginLeft={marginLeft} size={size} width={width}>{props.children}</ButtonWrapper>
}