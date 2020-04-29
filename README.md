# GetLost Software Engineer Interview Project #
<img src='https://getlost-misc.s3.us-east-2.amazonaws.com/getlost_pink.jpg' width='40%' style='display: block; margin: auto'/>

### Project Instructions ###
The purpose of this small interview project is for us to gauge your understanding of React and frontend web development. Given information we've provided, we assume that you are familiar working with ReactJS and AJAX. For this project, you are expected to create a movie search form that queries and displays multiple titles fetched from the OMDB API using React. This project is relatively simple and should not take you more than 2-3 hours to complete.

Feel free to reach out to williamhuang@flygetlost.com with any questions on this project.

### 1. Get API Access ###
To use the API, you need to create an API key using this link: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx). You should be able to register for an API key using the FREE option by filling out a quick form. **You do not have to put in your actual personal information**, and putting in dummy first and last names should still give you API access. You will receive the API key in the email you specified, where you will be prompted to activate your key through a link. After your key is activated you can start using it to make HTTP requests.

### 2. What you're building ###
Consult the OMDB's API [documentation](http://www.omdbapi.com/) (link: [http://www.omdbapi.com/](http://www.omdbapi.com/)) on how to query the API. A user should be able to search for movies through your search form using a movie keywords (much like [IMDB](https://www.imdb.com/)!). Basically, the form should have the following components:
  - A search bar
  - Submit button

When a user presses Submit, a list of movies should be displayed. Use the OMDB API to list each movie. Each movie listed should have the following information rendered:
  - Title and Year
  - Movie Image (there should be a link within each movie response
  - A delete button

When a user clicks on the delete button for a movie, remove the movie that was clicked from the search results. Remove the movie from React/Redux state directly instead of hiding the movie result using CSS.

### 3. Bonus Points ###
*Note: this is completely optional, but feel free to showcase your skills!*

  1. A big part of GetLost's engineering focus is on user experience. As such, you get bonus points for making the application look clean. A CSS framework like [Bootstrap](https://react-bootstrap.github.io/) or [Material UI](https://material-ui.com/) should make this very simple.
  2. Store and retrieve movie information using Redux instead of React state
  3. Mobile Responsiveness

### 4. Useful Information ###
  - We suggest using [create-react-app](https://github.com/facebook/create-react-app) to quickly get a react project up and running quickly.
  - Using an NPM module such as [axios](https://www.npmjs.com/package/axios) for making HTTP calls. This can make creating requests/parsing in React easier.

### 5. How to Submit Project: ###
  1. A link to the web application. Feel free to host this however you like — free platforms that help you host your React apps include [Heroku](https://heroku.com/) and [Github](https://github.com/). Consult [this guide](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae) on how to deploy Heroku.
  2. A link to Github with the source code for this project. Please remember to make it publicly accessible so we can see your awesome work :)
