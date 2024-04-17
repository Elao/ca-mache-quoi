import { FoodOption } from '@app/pages/options-list.tsx'
import SlotOptions from '@app/components/slot-machine/slot-options.tsx'
import SlotMachineImage from '@app/components/slot-machine/slot-machine-image.tsx'

type Props = {
  options: FoodOption[]
  pickedOptions: string[]
}

export default function SlotMachine({ options, pickedOptions }: Props) {
  return <>
    <SlotMachineImage/>
    <SlotOptions options={options} pickedOptions={pickedOptions}/>
  </>
}
