import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CustomInput = styled.input`
border-radius: 7px;
margin: 6px;
width: 340px;
padding: 10px;
height: 30px;
font-size: 16px;
color:black;

`;

export const CustomLink = styled(Link)`
text-decoration:none !important;
color:white !important;

`;

export const CustomButton = styled.button`
display: inline-block;
border-radius: 4px;
background-color: grey;
border: none;
color: #FFFFFF;
text-align: center;
font-size: 18px;
height:40px;
width: 200px;
transition: all 0.5s;
cursor: pointer;
margin: 40px;
:hover {
    background-color: #008CBA;
    color: white;
}

`;

export const CustomForm = styled.form`
text-align: center;
margin-top:40px;
margin-bottom: 40px;
`;

export const Title = styled.h1`
padding: 30px;
`;

