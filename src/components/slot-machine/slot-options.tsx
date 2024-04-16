import { FoodOption } from '@app/pages/options-list.tsx'
import { styled } from '@mui/material'

type Props = {
  options: FoodOption[]
  pickedOptions: string[]
}

export default function SlotOptions({ options, pickedOptions }: Props) {
  const slotOptions: FoodOption[] = options.filter((option) => pickedOptions.includes(option.id));

  return <>
    <OptionList>
      {slotOptions.map((option) => (
        <Option key={option.id}>
          <span>{option.icon}</span>
          <span>{option.icon}</span>
          <span>{option.icon}</span>
        </Option>
      ))}
    </OptionList>
  </>;
}

const OptionList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  listStyle: 'none',
}));

const Option = styled('li')(({ theme }) => ({
  padding: `${theme.spacing(.5)} ${theme.spacing(1)}`,
  height: '70px',
  width: '260px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  fontSize: '2.4rem',
  background: theme.palette.common.white,
  borderRadius: '50px',
}));
