// import appStore from "../../store/store";
// import appAxios from "./appAxios";

// const makeDeleteRequest = async (
//   endpoint: string,
//   params = {},
//   headers = {}
// ) => {
//   const { userToken } = appStore();
//   const { data } = await appAxios.delete(endpoint, {
//     headers: {
//       Authorization: userToken ? `Token ${userToken}` : undefined,
//       ...headers,
//     },
//     params: params,
//     paramsSerializer: {
//       indexes: null, // by default: false
//     },
//   });
//   return data;
// };

const makeDeleteRequest={}

export default makeDeleteRequest;
