import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondery'
}

const Button = ({ children, type, title, to, variant = 'primary' }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        title={title}
        type="button"
        onClick={onclick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}
export default Button
