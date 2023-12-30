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
          <Switch className={checked ? 'on' : 'off'} checked={checked} onChange={handleSwitch} />
        }
        label={label}
      />
    </FormGroup>
  );
}


const LabelStyled = styled(FormControlLabel)(({ theme }) => ({
  '.MuiSwitch-root': {
    height: '55px',
    borderWidth: '2px',
    borderColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main,
    opacity: '1',
    '&:before, &:after': {
      content: '""',
      color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main,
      textTransform: 'uppercase',
      fontSize: '.9rem',
      fontWeight: '600',
      position: 'absolute',
      top: 18,
    },
  },
  '&:has(.on) .MuiSwitch-track:before': {
    content: '"Off"',
    left: 20,
  },
  '&:has(.off) .MuiSwitch-track:after': {
    content: '"On"',
    right: 20,
  },
  '.MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    opacity: '1',
    height: '19px',
    width: '19px',
  },
}));
