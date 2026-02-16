import ProductsList from '../../components/ProductsList'
import Game from '../../models/games'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Ps5',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: star_wars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo',
    system: 'Ps5',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda',
    system: 'Nitendo',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    discription:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'star Wars',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: star_wars
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
export default Categories
