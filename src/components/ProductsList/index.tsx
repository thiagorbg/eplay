import Game from '../../models/games'
import Products from '../Products'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Products
            key={game.id}
            category={game.category}
            discription={game.discription}
            image={game.image}
            system={game.system}
            title={game.title}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
