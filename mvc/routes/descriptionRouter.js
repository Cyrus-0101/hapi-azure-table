import getAllDescriptions from "../controllers/descriptionController.js";

const routes = [
  {
    method: "GET",
    path: "/api/v1/descriptions",
    // Add descriptionController
    handler: getAllDescriptions,
  },
];

export default routes;
