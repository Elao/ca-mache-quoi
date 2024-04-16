import { FoodOption } from '@app/pages/options-list.tsx'
import SlotOptions from '@app/components/slot-machine/slot-options.tsx'


type Props = {
  options: FoodOption[]
}

export default function SlotMachine({ options }: Props) {
  return <>
    <SlotOptions options={options}/>
  </>
}