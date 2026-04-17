import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b020d4b74cfafbca08c67e9375e861eb2d40d5f3', queries,  });
export default client;
  