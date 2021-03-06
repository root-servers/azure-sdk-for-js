// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SearchIndexerClient, AzureKeyCredential, SearchIndexerSkillset } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

export async function main() {
  console.log(`Running Create Or Update Skillset Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Getting Skillset my-azureblob-skillset`);
  const skillset: SearchIndexerSkillset = await client.getSkillset("my-azureblob-skillset");

  skillset.skills[0].outputs = [
    {
      name: "persons",
      targetName: "people"
    },
    {
      name: "organizations",
      targetName: "organizations"
    }
  ]
  
  await client.createOrUpdateSkillset(skillset);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
