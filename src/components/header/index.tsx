import { LinkCart, LinkTtem, LinksUl, NavBar, HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <NavBar>
      <img src={logo} alt="Eplay" />
      <LinksUl>
        <LinkTtem>
          <a href="#">Categorias</a>
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
