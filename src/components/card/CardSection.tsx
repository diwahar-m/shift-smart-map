import { InfoIcon } from "../../assets";
import AppImage from "../mui/AppImage";
import AppHStack from "../mui/AppStack/AppHStack";
import AppText from "../mui/AppText";
import AuditTrendText from "./AuditTrendText";
import AppLinearProgress from "../mui/AppLinearProgress";
import AppToolTip from "../mui/AppToolTip";
import { InventoryDetailProps } from "../../pages/dashboard";
import AppVStack from "../mui/AppStack/AppVStack";
import { Skeleton } from "@mui/material";

export default function CardSection({
  detail,
}: {
  detail: InventoryDetailProps;
}) {
  return (
    <>
      {detail ? (
        <AppVStack
          sx={{
            border: "1px solid #CBD5E1",
            maxWidth: "270px",
            minHeight: "154px",
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            flex: 1,
          }}
        >
          <AppHStack
            sx={{
              width: "100%",
              justifyContent: "space-between",
              height: "24px",
            }}
          >
            <AppText
              variant={"h4"}
              text={detail?.title}
              sx={{ color: "#475569", fontSize: "16px" }}
            />
            <AppToolTip title="Completed Audits">
              <AppImage src={InfoIcon} />
            </AppToolTip>
          </AppHStack>
          <AppText
            sx={{
              color: "#0F172A",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "45px",
              height: "40px",
            }}
            variant="h1"
            text={
              detail?.price ? `$${detail?.price}` : `${detail?.percentage}%`
            }
          />
          {detail?.percentage && (
            <AppLinearProgress value={detail?.percentage} />
          )}

          <AuditTrendText />
        </AppVStack>
      ) : (
        <AppVStack
          sx={{
            border: "1px solid #CBD5E1",
            maxWidth: "270px",
            minHeight: "154px",
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            flex: 1,
          }}
        >
          <AppHStack
            sx={{
              width: "100%",
              justifyContent: "space-between",
              height: "24px",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50%" }} />
            <Skeleton variant="circular" width={20} height={20} />
          </AppHStack>
          <Skeleton variant="rectangular" width={80} height={70} />
          <Skeleton variant="rounded" width={210} height={20} />
          <Skeleton variant="rectangular" width={210} height={10} />
        </AppVStack>
      )}
    </>
  );
}
