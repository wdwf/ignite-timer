import * as styled from './Button.styles';

interface ButtonProps {
  variant?: styled.ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <styled.ButtonContainer variant={variant}>Click</styled.ButtonContainer>
  )
}