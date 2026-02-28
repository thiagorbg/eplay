import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section background="black" title="Sobre o Jogo">
        <p>teste</p>
      </Section>
    </>
  )
}
export default Product
