import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://rgivqj4bvd.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://flaj2q5mk7.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '2WqvY62cgEkjaeqE7jjENg1whzPzjoda67EgxbqzKsZh', // <---- API key
  })
  
  const {entities} = client;

const useFDA = () => {
    return {entities}
}

export default useFDA;
