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
    <Stack spacing={2} sx={{ width: 300, ...sx }}>
      <Autocomplete
        id="free-solo-demo"
        onChange={handleChange}
        freeSolo
        options={options?.map((option) => option)}
        renderInput={(params) => (
          <TextField
            sx={{
              "& label": {
                top: -7, // move label down to center it better
              },
            }}
            {...params}
            label="Select State"
          />
        )}
      />
    </Stack>
  );
};

export default AppSelectBox;
