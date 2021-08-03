import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  font-family: Quicksand, arial, sans-serif;
  font-size: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color:grey;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 30px;
  text-align: center;
`;

export const ItemHeader = styled.header`
  padding-top: 1%;
  padding-bottom: 1%;
`;

export const ItemHeading = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

export const ItemParagraph = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

export const ItemBody = styled.div`
  padding-right: 1%;
  padding-left: 1%;
`;

export const Image = styled.img`
    width:100px;
    height: 100px;
`