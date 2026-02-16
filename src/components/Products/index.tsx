import Tag from '../tag/index'
import { Card, Descricao, TagInfo, Titulo } from './styles'

type Props = {
  image: string
  title: string
  category: string
  system: string
  infos: string[]
  discription: string
}

const Products = ({
  image,
  title,
  category,
  system,
  infos,
  discription
}: Props) => (
  <Card>
    <img src={image} />
    <TagInfo>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagInfo>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{discription}</Descricao>
  </Card>
)

export default Products
;('')
