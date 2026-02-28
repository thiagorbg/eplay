import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../tag'
import { BannerHero, Infoss } from './style'

const Hero = () => (
  <BannerHero style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infoss>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>de R$ 250,00 </span>
          por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar o Carrinha
        </Button>
      </Infoss>
    </div>
  </BannerHero>
)

export default Hero
