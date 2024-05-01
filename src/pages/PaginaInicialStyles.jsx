import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 'calc(100vh - 80px)',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76)), url('/img/header.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

const Title = styled('h1')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled('p')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Section = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const SectionTitle = styled('h2')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
}));

const SectionSubtitle = styled('p')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  textAlign: 'justify',
}));

const CenteredButton = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  textDecoration: 'none',
}));

export { HeroSection, Title, Subtitle, Section, SectionTitle, SectionSubtitle, CenteredButton };
