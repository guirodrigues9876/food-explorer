import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Logo({ fontSize, width, height, display, isAdmin}) {
  return (
    <Container>
      <img src={logo} alt="Logo food Explorer" />
      {isAdmin && <p>admin</p>} 
    </Container >
  )
}