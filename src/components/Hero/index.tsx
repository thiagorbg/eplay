import { useDispatch, useSelector } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../tag'
import { BannerHero, Infoss } from './style'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.sytem}</Tag>
        </div>
        <Infoss>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de {formataPreco(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <> por {formataPreco(game.prices.current)}</>
            )}
            {game.prices.current && (
              <Button
                type="button"
                title="Clique aqui para adicionar este jogo ao carrinho"
                variant="primary"
                onClick={addToCart}
              >
                Adicionar o Carrinho
              </Button>
            )}
          </p>
        </Infoss>
      </div>
    </BannerHero>
  )
}

export default Hero
