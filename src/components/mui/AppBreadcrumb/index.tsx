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
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "14px",
          fontWeight: 500,
        }}
      >
        <Link underline="hover" color="#475569" href="/">
          Audits
        </Link>

        <Typography
          sx={{
            color: "#475569",
            fontSize: "16px",
            lineHeight: "14px",
            fontWeight: 500,
          }}
        >
          Store-1
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
