'use client'

import { Container, ContainerRow, StyledTitle } from "@/componentes/style";
import CardRegistro from "./CardRegistro";

const Registro =()=> {
    return (
      <Container>
      <ContainerRow>
        <StyledTitle>Registro</StyledTitle>
      </ContainerRow>
      <ContainerRow>
        <CardRegistro />
      </ContainerRow>
    </Container>
    );
  }

  export default Registro