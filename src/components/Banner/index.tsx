import { Imagem, Titulo, Precos } from './styles'
import Tag from '../tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: games } = useGetFeaturedGameQuery()

  if (!games) {
    return <h4>Carregando...</h4>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${games?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{games?.name}</Titulo>
          <Precos>
            de <span>{formataPreco(games?.prices.old)}</span> <br />
            por apenas {formataPreco(games?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/Product/${games.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
