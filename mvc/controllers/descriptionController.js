import { TableClient } from "@azure/data-tables";
import { AZURE_STORAGE_CONNECTION_STRING } from "../utils/.env.js";

// Setup connection to Azure Table Storage
const serviceClient = TableClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING, // The connection string to the storage account
  "descriptions" // The name of the table to create/connect to
);

// @desc - Fetch the Descriptions in the Azure Table Storage service
// @route - /api/v1/descriptions
// @access - Public
// @method - GET
const getAllDescriptions = async (request, h) => {
  // Fetch all descriptions from Azure Table Storage
  let entitiesArray = {};

  const entities = serviceClient.listEntities();

  // Add each entity to the array
  for await (const entity of entities) {
    entitiesArray.push(entity);
  }

  // Return the array
  return h.response(entitiesArray).code(200);
};

export default getAllDescriptions;
