# google-place

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Running In Local

This requirement need to setup for running this app in your local environment.

1. Setup you google map api key
   Reference: https://developers.google.com/maps/documentation/javascript/get-api-key
2. Clone this project
3. Add variable GOOGLE_MAP_API_KEY to your local environtment with google map api key value.
   Reference: https://www.freecodecamp.org/news/how-to-set-an-environment-variable-in-linux/
   Reference: https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/
4. Run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### MAPS API

Before run this application, you need to create credential from google page dashboard.
Follow the instructions [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)

### Directory Structure

- assets (static files such as logo)
- components (naming component)
- features (features base domain or route)

### Deployment Configuration

We are using netifly to serve our content to the cloud.
You can access this app on this url
https://deploy-preview-5--imaginative-crostata-d30042.netlify.app/feed
