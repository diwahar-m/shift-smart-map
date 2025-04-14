import AppImage from "../mui/AppImage";
import AppVStack from "../mui/AppStack/AppVStack";
import AppText from "../mui/AppText";
interface ProductImageCardProps {
  src: string;
  date: string;
}

export default function ProductImageCard({ src, date }: ProductImageCardProps) {
  return (
    <AppVStack
      sx={{
        padding: "14px",
        gap: "10px",
        maxWidth: "460px",
        borderRadius: "24px",
        bgcolor: "#F8FAFC",
      }}
    >
      <AppText
        sx={{
          color: "#000000",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 400,
        }}
        text={date}
      />
      <AppImage
        src={src ? src : ""}
        sx={{ maxWidth: "412px", maxHeight: "316px", borderRadius: "12px" }}
      />
    </AppVStack>
  );
}
