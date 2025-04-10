// import appStore from "../../store/store";
// import appAxios from "./appAxios";

// const makePatchRequest = async (
//   endpoint: string,
//   body: unknown,
//   headers: unknown
// ) => {
//   const { userToken } = appStore();
//   const { data } = await appAxios.patch(endpoint, body, {
//     headers: {
//       Authorization: userToken ? `Token ${userToken}` : undefined,
//       ...(headers ?? {}),
//     },
//   });
//   return data;
// };

const makePatchRequest={}

export default makePatchRequest;
