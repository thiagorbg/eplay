import { CartButton, LinkTtem, LinksUl, NavBar, HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
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
      <CartButton onClick={openCart}>
        {items.length} - Produtos(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
