import { Box } from "@mui/material";

const MultiSegmentProgressBar = ({ values = [30, 20, 50] }) => {
  const [first, second, third] = values;
  const total = second + third; //first + second + third;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 10,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "#eee",
      }}
    >
      <Box
        sx={{
          width: `${(second / total) * 100}%`,
          height: 10,
          //   borderRadius: 5,
          backgroundColor: "#0B57C0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: `${(first / second) * 100}%`,
            height: "100%",
            backgroundColor: "#047857",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>

      <Box
        sx={{
          width: `${(third / total) * 100}%`,
          backgroundColor: "#B91C1C",
        }}
      />
    </Box>
  );
};

export default MultiSegmentProgressBar;
