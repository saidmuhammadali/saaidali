import styled from "styled-components";

const MArketDiv = styled.div`
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
`;
const RowDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const H = styled.a`
  font-family: "Anton", sans-serif;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  border: 2px solid white;
  background: linear-gradient(to right, white 50%, lightgreen 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: black;
    border: 2px solid black;
    background-position: left bottom;
    border-radius: 10px;
  }
`;
const Roww = styled.div`
  display: flex;
  justify-content: center;
`;
const Da = styled.img`
  width: 247px;
  height: 247px;
`;

export { MArketDiv, H, RowDiv, Roww, Da };
