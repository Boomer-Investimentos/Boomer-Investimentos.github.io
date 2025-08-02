import styles from './Header.module.css';
import whiteBoomerWarrenBannner from '../../assets/imgs/banner_boomer_warren_white.png';

import { Nav, Container, Navbar, Image } from 'react-bootstrap';
function Header() {
  return (
    <Navbar sticky='top' bg='dark' className='py-1'>
      <Container>
        <Navbar.Brand href="/" className="d-flex flex-column">
          <Image src={whiteBoomerWarrenBannner} alt="Logo Boomer Investimentos" className={styles.brandLogo} />
          <span className={styles.boomerTextHeader}>Boomer Investimentos</span>
        </Navbar.Brand>
        <Nav>
          <Nav.Link className={styles.link} href="/">Home</Nav.Link>
          <Nav.Link className={styles.link} href="team">Nossa Equipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;