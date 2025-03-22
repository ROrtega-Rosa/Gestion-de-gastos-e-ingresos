'use client'
import styled from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';

export const Container = styled.div`
width: 100%;
overflow: auto;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;


`
export const ContainerColumn = styled.div`

display: flex;
flex-direction: column;
align-item:center;
text-align:center;
justify-content: center;
`
export const ContainerRow = styled.div`
width: 100%;
padding: 5vh;
display: flex;
flex-direction: row;
justify-content: center;
`
export const ContainerRowButton = styled.div`
width: 100%;
padding: 5vh;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const ContainerRowGraphic = styled.div`
width: 100%;
padding-top: 10vh;
display: flex;
flex-direction: row;
justify-content: space-between;
 @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 3vh;
  }
`

export const ContainerForm = styled.div`
 padding: 5%;
  border-radius: 10px;
  background-color: #ffffff;;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
   &:hover {
    transform: scale(1.02);
  }

  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-input,
  .ant-btn {
    border-radius: 8px;
  }

  .ant-btn-primary {
    background: #1976d2;
    border-color: #1976d2;
    transition: background 0.3s ease;

    &:hover {
      background: #1565c0;
      border-color: #1565c0;
    }
  }

`
export const StyledTitle = styled.h1`
  font-family: Vegur, 'PT Sans', Verdana, sans-serif;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #1565c0, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
    `
export const StyleTableContainer = styled(TableContainer)`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  

`
 export const StyledTable = styled(Table)`
  min-width: 650px;
  background-color: #f9f9f9;
`;
export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f1f1f1;
  }
  &:hover {
    background-color: #e3f2fd;
  }
`;

export const StyledTableHead = styled(TableHead)`
background-color: #1976d2;
& th {
  color: white;
  font-weight: bold;
}
`;

export const GraphicStyle  = styled.div`
  padding: 2%;
  margin: 2%;
  width: 100%;
   display: flex;              // Asegúrate de que el contenedor use flexbox
  flex-direction: column;     // Alineación vertical
  align-items: center;        // Centrado en el eje vertical
  justify-content: center;
  align-item:center;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
   &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    padding: 3%;
  }

`
export const Titulo = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 8px;
`;

export const Texto = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => (props.negativo ? "red" : "green")};
  text-align: center;
`;