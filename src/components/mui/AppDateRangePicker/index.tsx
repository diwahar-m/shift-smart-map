import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const AppDateRangePicker: React.FC = () => {
  return (
    <RangePicker
      onChange={(dates, dateString) => console.log(dates, dateString)}
      style={{ height: "40px" }}
    />
  );
};

export default AppDateRangePicker;
