import { FoodOption } from '@app/pages/options-list.tsx'
import SlotOptions from '@app/components/slot-machine/slot-options.tsx'
import SlotMachineImage from '@images/slot-machine.svg'
import { styled } from '@mui/material'

type Props = {
  options: FoodOption[]
  pickedOptions: string[]
}

export default function SlotMachine({ options, pickedOptions }: Props) {
  return <>
    <Image src={SlotMachineImage} alt=""/>
    <SlotOptions options={options} pickedOptions={pickedOptions}/>
  </>
}

const Image = styled('img')(() => ({
  width: '400px',
  position: 'fixed',
  top: '50%',
  right: '100px',
  transform: 'translateY(-50%)',
}));