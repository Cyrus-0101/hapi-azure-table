# Hapi.js API

To fetch data from `CosmosDB` Azure for Tables API.

## Cloning the application.

- After cloning the repo you need to do an npm install to install all dependencies.

```sh
    git clone https://github.com/Cyrus-0101/hapi-azure-table.git
    cd hapi-azure-table
    npm i
```

## Setting Up the application

- Once this is complete head over to the `mvc/utils` folder in the app and create a `.env.js` file and copy the configuration information in the `sample.env.js` file and add your Azure connection string.

- To change the partition to be queried head over to the `controllers/descriptionController.js` file and edit this function:

```javascript
    const serviceClient = TableClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING, // The connection string to the storage account
  "descriptions" // Here you can edit which table you want to query.
);
```

- After setting everything up run:

```sh
    npm run dev # Development Environment
    npm start # Production environment
```