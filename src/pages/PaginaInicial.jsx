import React from "react";
import { Button, Container } from "@mui/material";
import { HeroSection, Title, Subtitle, Section, SectionTitle, SectionSubtitle, CenteredButton } from "./PaginaInicialStyles";
import { Link } from "react-router-dom";

function PaginaInicial() {
  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Title>Que tal aproveitar um tempo com a natureza?</Title>
          <Subtitle>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </Subtitle>
          <Link to="/lista-trilhas" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Explorar Trilhas
            </Button>
          </Link>
        </Container>
      </HeroSection>

      <Section>
        <Container maxWidth="md">
          <SectionTitle>Explore Trilhas Incríveis</SectionTitle>
          <SectionSubtitle>
          O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
          </SectionSubtitle>
          <CenteredButton>
          <Link to="/lista-trilhas" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Explorar Trilhas
            </Button>
          </Link>
          </CenteredButton>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="md" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <SectionTitle>Compartilhe fotos, dicas e localização das suas trilhas favoritas</SectionTitle>
            <Link to="/cadastro-trilha" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Cadastrar Nova Trilha
              </Button>
            </Link>
          </div>
          <div style={{ flex: 1 }}>
            <img src="/img/cadastro_trilha.jpg" alt="Imagem da trilha" style={{ width: "100%", height: "auto" }} />
          </div>
        </Container>
      </Section>
    </>
  );
}

export default PaginaInicial;
