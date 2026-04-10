import { Game } from '../../pages/Home'
import Products from '../Products'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (games: Game) => {
    const tags = []

    if (games.release_date) {
      tags.push(games.release_date)
    }
    if (games.prices.discount) {
      tags.push(`${games.prices.discount}%`)
    }

    if (games.prices.current) {
      tags.push(formataPreco(games.prices.discount))
    }
    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Products
                id={game.id}
                category={game.details.category}
                discription={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.sytem}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
