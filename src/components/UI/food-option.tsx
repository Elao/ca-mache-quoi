import React from 'react'
import { styled } from '@mui/material'

type Props = {
  id: string
  label: string
  icon: string
  pickedOptions: string[]
  setPickedOptions: (options: string[]) => void
}

export default function FoodOption({ id, label, icon, pickedOptions, setPickedOptions }: Props) {
  const checked = pickedOptions.includes(id);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setPickedOptions([...pickedOptions, id]);
    } else {
      setPickedOptions(pickedOptions.filter(option => id !== option));
    }
  }

  return <>
    <Input type="checkbox" id={label} onChange={handleChange} className={checked ? 'checked' : ''} />
    <Label htmlFor={label} >
      <Icon>{icon}</Icon>
      {label}
    </Label>
  </>;
}

const Label = styled('label')(({ theme }) => ({
  padding: theme.spacing(1.5),
  height: '75px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1.1rem',
  color: theme.palette.text.primary,
  background: theme.palette.secondary.main,
  border: 'solid 2px',
  borderColor: theme.palette.secondary.light,
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'all .2s',

  '&:hover, &:focus': {
    borderColor: theme.palette.primary.main,
  },

  'input:checked, .checked + &': {
    background: theme.palette.primary.dark,
    borderColor: theme.palette.primary.main,
  },
}));

const Icon = styled('span')(() => ({
  fontSize: '2rem',
}));

const Input = styled('input')(() => ({
  display: 'none',
}));
