import { useEffect, useState } from 'react'
import ToggleSwitch from '@app/components/UI/toggle-switch.tsx'
import Button from '@app/components/UI/Button.tsx'
import FoodOption from '@app/components/UI/food-option.tsx'
import SlotMachine from '@app/components/slot-machine/slot-machine.tsx'
import data from  '@app/data/food-options.ts'
import { styled } from '@mui/material'

export interface FoodOption {
  id: string
  label: string
  icon: string
}

export default function OptionsList() {
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const foodOptions = data.foodOptions;

  useEffect(() => {
    if (allSelected) {
      setPickedOptions(foodOptions.map(option => option.id));
    } else {
      setPickedOptions([]);
    }
  },[allSelected, foodOptions]);

  return <>
    <Wrapper>
      <ColumnsWrapper>
        <ToggleSwitch label="Tout sélectionner" checked={allSelected} setChecked={setAllSelected}/>
        <Columns>
          {foodOptions && foodOptions.map((option: FoodOption) => {
            return <FoodOption
              key={option.id}
              id={option.id}
              label={option.label}
              icon={option.icon}
              pickedOptions={pickedOptions}
              setPickedOptions={setPickedOptions}
            />
          })}
        </Columns>
        <ButtonWrapper>
          <Button>Fais tourner !</Button>
        </ButtonWrapper>
      </ColumnsWrapper>
      <SlotMachine options={foodOptions} pickedOptions={pickedOptions}/>
    </Wrapper>
  </>
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
}));

const ColumnsWrapper = styled('div')(({ theme }) => ({
  margin: `${theme.spacing} 0 ${theme.spacing(3)}`,
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}));

const Columns = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.5rem',
}));

const ButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));
