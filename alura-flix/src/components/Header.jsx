import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
import bannerImage from '../img/banner.jpg';

const Header = () => {
    

    return (
        <HeaderContainer>
            <TopSection>
                <Logo src={logo} alt="AluraFlix Logo" />
                <Nav>
                    <NavButton to="/">Home</NavButton>
                    <NavButton to="/new">Nuevo Video</NavButton>
                </Nav>
            </TopSection>
            <Banner>
                <BannerText>
                    <BannerTitle>FRONT END</BannerTitle>
                    <BannerSubtitle>Challenge de React</BannerSubtitle>
                    <BannerDescription>
                        En este challenge, he podido crear una Single Page Application usando todos los conocimientos adquiridos a lo largo de la formación de React en Alura Latam.
                    </BannerDescription>
                </BannerText>
                <BannerVideo>
                    <iframe
                        width="320"
                        height="180"
                        src="https://www.youtube.com/embed/ov7vA5HFe6w" 
                        title="Qué Significa Pensar Como Programador"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </BannerVideo>
            </Banner>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavButton = styled(Link)`
  padding: 10px 20px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  box-shadow: outset 4px 4px 4px 4px #1b1b1b;
  
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #0f58b3;
    box-shadow: inset 0px 0px 12px 4px #931ce2;
    border-radius: 10px;
    color: #f0da13;
    transform: scale(1.2); 
  }
`;

const Banner = styled.div`
  display: flex;
  height: 400px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  margin: 20px 0;
  box-sizing: content-box;
  border: 2px solid  #0f58b3;
  box-shadow: inset 0px 0px 10px 4px #0f58b3;
  opacity: 91%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const BannerText = styled.div`
  max-width: 50%;
`;

const BannerTitle = styled.h2`
  color: #fff;
  padding: 10px;
  background-color: rgba(30, 144, 255, 0.7);
  border-radius: 5px;
`;

const BannerSubtitle = styled.h3`
  color: #fff;
  padding: 5px;
  background-color: rgba(30, 144, 255, 0.5); 
  border-radius: 5px;
  margin-top: 10px;
`;

const BannerDescription = styled.p`
  color: #fff;
  padding: 5px;
  font-size: large;
  background-color: rgba(30, 144, 255, 0.3); 
  border-radius: 5px;
  margin-top: 10px;
`;

const BannerVideo = styled.div`
  iframe {
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Header;
