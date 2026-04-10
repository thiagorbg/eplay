import Tag from '../tag/index'
import { Card, Descricao, TagInfo, Titulo } from './styles'

type Props = {
  image: string
  title: string
  category: string
  system: string
  infos: string[]
  discription: string
  id: number
}

const Products = ({
  image,
  title,
  category,
  system,
  infos,
  discription,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={image} />
      <TagInfo>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagInfo>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(discription)}</Descricao>
    </Card>
  )
}

export default Products
;('')
