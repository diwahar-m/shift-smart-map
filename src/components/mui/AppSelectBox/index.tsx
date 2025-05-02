import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SxProps } from "@mui/material";

interface AppSelectBoxProps {
  options: Array<string>;
  sx?: SxProps;
  onChange?: (event?: string) => void | undefined;
  label?: string;
  value?: string | undefined;
}

const AppSelectBox = (props: AppSelectBoxProps) => {
  const { options, onChange, value } = props;

  const handleChange = (
    event?: React.SyntheticEvent<Element, Event>
    // date?: string | null
  ) => {
    console.log(event);
    // @ts-expect-error "event"
    if (event) onChange?.(event);
    else onChange?.();
  };

  return (
    // <Stack spacing={2} sx={{ width: 300, ...sx }}>
    //   <Autocomplete
    //     id="free-solo-demo"
    //     value={value}
    //     onChange={handleChange}
    //     onInputChange={(_event, value) => {
    //       if (!value) handleChange();
    //     }}
    //     // freeSolo
    //     options={options?.map((option) => option)}
    //     renderInput={(params) => (
    //       <TextField
    //         sx={{
    //           "& label": {
    //             top: -7,
    //           },
    //         }}
    //         {...params}
    //         label={label || "Select State"}
    //       />
    //     )}
    //   />
    // </Stack>
    // @ts-expect-error "event"
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select BU" />
      </SelectTrigger>
      <SelectContent>
        {options.map((state) => (
          <SelectItem key={state} value={state}>
            {state}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AppSelectBox;
