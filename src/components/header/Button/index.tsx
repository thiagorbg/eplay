import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, type, title, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} type="button" onClick={onclick}>
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}
export default Button
