import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

interface AppDateRangePickerProps {
  onChange: (value: string[]) => void;
  style?: React.CSSProperties;
}

const AppDateRangePicker = ({ onChange, style }: AppDateRangePickerProps) => {
  return (
    <RangePicker
      onChange={(dates, dateString) => onChange(dateString)}
      style={style}
    />
  );
};

export default AppDateRangePicker;
