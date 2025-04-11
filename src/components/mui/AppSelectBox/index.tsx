import  { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SxProps } from '@mui/material';

interface AppSelectBoxProps {
    options?: Array<string>;
    sx?: SxProps;
    onChange: (event: SelectChangeEvent<string>) => void,
    label?: string
}

const AppSelectBox = (props: AppSelectBoxProps) => {

    const { options,sx, onChange, label } = props;

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
    onChange(event)
  };

  return (
    <FormControl variant="outlined" sx={sx} size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedOption}
        onChange={handleChange}
        label={label || "Select"}
      >
        {options?.map((option) => (
          <MenuItem key={option} value={option} sx={{color: '#02378a'}}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelectBox;
