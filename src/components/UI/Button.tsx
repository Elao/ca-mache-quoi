import { styled } from '@mui/material'

type Props = {
  onClick: () => void
  children: React.ReactNode
}

export default function Button({ onClick, children }: Props) {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled('button')(({ theme }) => ({
  height: '60px',
  padding: `0 ${theme.spacing(2.5)}`,
  fontSize: '18px',
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  background: theme.palette.primary.main,
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'all .2s',

  '&:hover, &:focus': {
    background: theme.palette.primary.dark,
  },
}));
