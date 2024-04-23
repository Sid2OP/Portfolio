import styled from "styled-components";

export const Box = styled.div`
padding: 4% 2.5%;
background: black;
bottom: 0;
width: 95%;
margin-top: 300px;
`;

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
margin: 0 auto;
margintop:50px

`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 50px;
`;

export const Row = styled.div`
display: flex;
grid-template-column: repeat(
    auto-fill,
    minmax(200px, 1fr)
    );
    grid-gap: 100px;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 20px;
text-decoration: none;

&:hover {
    color:green;
    transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 25px;
color: darkorange;
margin-bottom: 30px;
font-weight: 20px;
`;