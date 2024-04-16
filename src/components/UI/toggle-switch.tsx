import React from 'react'
import { FormGroup, FormControlLabel, Switch, styled } from '@mui/material'

interface Props {
  label: string
  checked: boolean
  setChecked: (value: boolean) => void
}

export default function ToggleSwitch({
  label,
  checked,
  setChecked,
}: Props) {

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  return (
    <FormGroup>
      <LabelStyled
        control={
          <Switch checked={checked} onChange={handleSwitch} />
        }
        label={label}
      />
    </FormGroup>
  );
}


const LabelStyled = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.text.primary,

  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.text.primary,
  },
}));
