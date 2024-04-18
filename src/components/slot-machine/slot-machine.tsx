import { FoodOption } from '@app/pages/options-list.tsx'
import SlotOptions from '@app/components/slot-machine/slot-options.tsx'
import SlotMachineImage from '@app/components/slot-machine/slot-machine-image.tsx'
import { styled } from "@mui/material";

type Props = {
  options: FoodOption[]
  pickedOptions: string[]
  result: string | null
}

export default function SlotMachine({ options, pickedOptions, result }: Props) {
  console.log(result)

  return <Wrapper>
    <SlotMachineImage/>
    <SlotOptions options={options} pickedOptions={pickedOptions}/>
  </Wrapper>
}

const Wrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',

  // Todo remove after positioning is done
  background: 'tomato',
}))