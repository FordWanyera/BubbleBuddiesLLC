import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://jcs081r2db.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://c7wijc7zuh.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '9ofvmPLd2cYiJXxjkYx6TrCF3vBdKwx4VXyYSYET2nnN', // <---- API key
  })

const {entities} = client;

const useBavaria = () => {
    return {entities}
}

export default useBavaria;