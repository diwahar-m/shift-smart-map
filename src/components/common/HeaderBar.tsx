import AppText from "../mui/AppText";
import AppHStack from "../mui/AppStack/AppHStack";
import AppSelectBox from "../mui/AppSelectBox";
import CardSection from "../card/CardSection";
import AppVStack from "../mui/AppStack/AppVStack";
import { usaStates } from "../../constants";
import { useNavigate } from "react-router-dom";
import PathCard from "../card/PathCard";

export default function HeaderBar() {
  const navigate = useNavigate();

  return (
    <AppVStack sx={{ width: "100%", padding: "30px", gap: "20px" }}>
      <AppText
        variant={"h4"}
        text={"Audits"}
        sx={{
          color: "#0F172A",
          fontWeight: 600,
          lineHeight: "40px",
          fontSize: "2rem",
        }}
      />
      <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
        <AppHStack sx={{ gap: "5px" }}>
          <AppSelectBox
            label={"Select State"}
            onChange={(event) => navigate(`/state/${event.target.value}`)}
            sx={{ width: "220px", borderRadius: "8px" }}
            options={usaStates}
          />
          <AppSelectBox
            onChange={() => {}}
            label={"Select Date Range"}
            sx={{ width: "220px", borderRadius: "8px" }}
          />
        </AppHStack>
        <PathCard />
      </AppHStack>
      <AppHStack sx={{ gap: "5px" }}>
        {new Array(3).fill("_")?.map((_, index) => <CardSection key={index} />)}
      </AppHStack>
    </AppVStack>
  );
}
