import { Suspense, ComponentType } from "react";
import AppCenterStack from "../AppStack/AppCenterStack";
import { CircularProgress } from "@mui/material";

const AppLoadSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => {
    return (
      <Suspense
        fallback={
          <AppCenterStack
            sx={{ width: "100%", height: "100%", minHeight: "500px" }}
          >
            <CircularProgress />
          </AppCenterStack>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
};

export default AppLoadSuspense;
