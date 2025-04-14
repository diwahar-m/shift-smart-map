/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AuditTrendText from "../card/AuditTrendText";
import ProductImageCard from "../card/ProductImageCard";
import ProductStatusCard from "../card/ProductStatusCard";
import TagCard from "../card/TagCard";
import AppHStack from "../mui/AppStack/AppHStack";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";

interface ProductProps {
  image: string;
  price: string;
  date: string;
}

export default function Product({ storeDetail }: ProductProps) {
  return (
    <AppVStack
      sx={{
        width: "100%",
        paddingLeft: "40px",
        padding: "32px",
        gap: "32px",
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
          children={
            <TagCard
              theme={storeDetail?.image ? "green" : "red"}
              title={storeDetail?.image ? "On shelf" : "Out of stock"}
            />
          }
        />
        {storeDetail?.price && (
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
                  text={storeDetail?.price ? storeDetail?.price : "NA"}
                />

                <AuditTrendText />
              </AppVStack>
            }
          />
        )}
      </AppHStack>

      {storeDetail?.image && (
        <AppVStack
          sx={{
            width: "100%",
            gap: "20px",
          }}
        >
          <AppText
            variant="subtitle2"
            sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 600 }}
            text={"Images"}
          />
          <ProductImageCard date={storeDetail?.date} src={storeDetail?.image} />
        </AppVStack>
      )}
    </AppVStack>
  );
}
