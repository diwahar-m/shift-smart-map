import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate, useParams } from "react-router-dom";

export default function AppBreadcrumb() {
  const navigate = useNavigate();
  const { storeId } = useParams();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
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
          {storeId}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
