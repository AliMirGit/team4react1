# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


bash prompt to set local env variable
export DATABASE_CONNECTION_STRING='Server=tcp:team4sqlserver.database.windows.net,1433;Initial Catalog=team4sql1;Persist Security Info=False;User ID=azureuser;Password={NEED-PWD-HERE};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'

bash prompt (starts both react and data-api)
swa start http://localhost:3000 --run "npm start " --data-api-location swa-db-connections
