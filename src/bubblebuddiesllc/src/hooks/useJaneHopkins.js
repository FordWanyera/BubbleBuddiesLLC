import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://mmua0jxpth.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://662s007527.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '9oa4VFdykHZdrVi2viXq5AR65KUAW8pLxDvwKMjYrvvc', // <---- API key
  })
  
  const {entities} = client;

  const useJaneHopkins = () => {
      return {entities}
  }

export default useJaneHopkins;