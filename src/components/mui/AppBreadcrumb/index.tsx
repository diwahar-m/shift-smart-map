import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export default function AppBreadcrumb() {
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.log("You clicked a breadcrumb.");
    navigate("/store/1/view");
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Audits
        </Link>

        <Typography sx={{ color: "text.primary" }}>Store-1</Typography>
      </Breadcrumbs>
    </div>
  );
}
