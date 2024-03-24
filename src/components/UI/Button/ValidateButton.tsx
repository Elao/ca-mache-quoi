import { Fab, styled } from '@mui/material'

const FabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  right: 0,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function ValidateButton() {
  return (
    <FabStyled>
      Valider
    </FabStyled>
  )
}
