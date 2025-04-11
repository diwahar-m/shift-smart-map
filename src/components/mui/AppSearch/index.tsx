import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "lucide-react";

export default function AppSearch() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
        border: "0.4px solid #CBD5E1",
        borderRadius: "13px",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Search size={"14"} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search product"
        inputProps={{ "aria-label": "search google maps" }}
      />
      {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}
