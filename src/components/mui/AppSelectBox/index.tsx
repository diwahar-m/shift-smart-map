import { SyntheticEvent, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Autocomplete, Stack, SxProps, TextField } from "@mui/material";

interface AppSelectBoxProps {
  options?: Array<string>;
  sx?: SxProps;
  onChange?: (event: string) => void;
  label?: string;
}

const AppSelectBox = (props: AppSelectBoxProps) => {
  const { options, sx, onChange, label } = props;

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    console.log(value);
    setSelectedOption(value);
    onChange?.(value);
  };

  return (
    // <FormControl variant="outlined" sx={sx} size="small">
    //   <InputLabel>{label}</InputLabel>
    //   <Select
    //     value={selectedOption}
    //     onChange={handleChange}
    //     label={label || "Select"}
    //   >
    //     {options?.map((option) => (
    //       <MenuItem key={option} value={option} sx={{ color: "#02378a" }}>
    //         {option}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        onChange={handleChange}
        freeSolo
        options={options?.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </Stack>
  );
};

export default AppSelectBox;
