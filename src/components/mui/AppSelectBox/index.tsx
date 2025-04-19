import { Autocomplete, Stack, SxProps, TextField } from "@mui/material";

interface AppSelectBoxProps {
  options: Array<string>;
  sx?: SxProps;
  onChange?: (event?: string) => void | undefined;
  label?: string;
}

const AppSelectBox = (props: AppSelectBoxProps) => {
  const { options, sx, onChange, label } = props;

  const handleChange = (
    _event?: React.SyntheticEvent<Element, Event>,
    date?: string | null
  ) => {
    if (date) onChange?.(date);
    else onChange?.();
  };

  return (
    <Stack spacing={2} sx={{ width: 300, ...sx }}>
      <Autocomplete
        id="free-solo-demo"
        onChange={handleChange}
        onInputChange={(_event, value) => {
          if (!value) handleChange();
        }}
        freeSolo
        options={options?.map((option) => option)}
        renderInput={(params) => (
          <TextField
            sx={{
              "& label": {
                top: -7,
              },
            }}
            {...params}
            label={label || "Select State"}
          />
        )}
      />
    </Stack>
  );
};

export default AppSelectBox;
