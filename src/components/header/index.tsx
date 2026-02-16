import { LinkCart, LinkTtem, LinksUl, NavBar, HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <NavBar>
      <Link to={'/'}>
        <img src={logo} alt="Eplay" />
      </Link>
      <LinksUl>
        <LinkTtem>
          <Link to={'/Categories'}>Categorias</Link>
        </LinkTtem>
        <LinkTtem>
          <a href="#">Novidade</a>
        </LinkTtem>
        <LinkTtem>
          <a href="#">Promoções</a>
        </LinkTtem>
      </LinksUl>
    </NavBar>
    <LinkCart href="#">
      0 - Produtos(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
