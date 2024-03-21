import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ea3eep63",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-03-21", // use current date (YYYY-MM-DD) to target the latest API version
});

const data = await client.fetch(`count(*)`);
console.log(`Number of documents: ${data}`);
