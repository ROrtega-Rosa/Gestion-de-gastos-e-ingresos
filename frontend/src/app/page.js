'use client'
import CardLogin from "@/componentes/CardLogin";
import NavBar from "@/componentes/NavBar";
import { ContainerRow, StyledTitle } from "@/componentes/style";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <Container>
      <ContainerRow>
        <StyledTitle>Iniciar sesión</StyledTitle>
      </ContainerRow>
      <ContainerRow>
        <CardLogin />
      </ContainerRow>
    </Container>
   
  
  );
}
