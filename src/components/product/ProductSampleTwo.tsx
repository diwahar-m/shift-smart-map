import AuditTrendText from "../card/AuditTrendText";
import ProductImageCard from "../card/ProductImageCard";
import ProductStatusCard from "../card/ProductStatusCard";
import TagCard from "../card/TagCard";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

export default function ProductSampleTwo() {
  return (
    <AppVStack
      sx={{
        width: "100%",
        gap: "20px",
      }}
    >
      <AppText
        variant="subtitle2"
        sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 600 }}
        text={"Details"}
      />
      <AppHStack sx={{ gap: "12px" }}>
        <ProductStatusCard
          text="Status"
          children={<TagCard theme={"green"} title="On shelf" />}
        />
        <ProductStatusCard
          text="Price"
          children={
            <AppVStack>
              <AppText
                sx={{
                  color: "#0F172A",
                  fontSize: "36px",
                  fontWeight: 600,
                  lineHeight: "45px",
                  height: "40px",
                }}
                variant="h1"
                text={"55%"}
              />

              <AuditTrendText />
            </AppVStack>
          }
        />
      </AppHStack>
      <AppText
        variant="subtitle2"
        sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 600 }}
        text={"Images"}
      />
      <AppHStack
        sx={{
          gap: "10px",
        }}
      >
        <ProductImageCard />
        <ProductImageCard />
      </AppHStack>
    </AppVStack>
  );
}
