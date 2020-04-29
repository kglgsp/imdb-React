# GetLost Software Engineer Interview Project #
![travel inspiration stock photo](https://www.creativeboom.com/uploads/articles/05/0541498270eb7f7a0b62f9a850a95698e027717f_2200.jpg)

### Project Instructions ###
The purpose of this small interview project is for us to gauge your understanding of React and frontend web development. We believe in a hands-on approach to our interview process and since you will be working on your projects remotely, we think this a good chance to showcase your engineering chops. For this project, you are expected to create a movie search form using React that queries and displays multiple titles fetched from the OMDB API. Given the information you provided on your technical capabilities, we assume that you are familiar working with ReactJS and AJAX. As such, this project should not take you more than 2-3 hours to complete.

Feel free to reach out to williamhuang@flygetlost.com with any questions.

### 1. Get API Access ###
To use the API, you need to create an API key. You should be able to register for an API key using the FREE option by filling out [this form](http://www.omdbapi.com/apikey.aspx) ([link: http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)). **You do not have to put in your actual personal information:** putting in dummy first and last names should still give you API access. You will receive the API key in the email you specified, where you will be prompted to activate your key through a link. After your key is activated you can start using it to make HTTP requests.

### 2. What you're building ###
*Note: Feel free to be creative with how you style your app!*

Consult the OMDB's API [documentation](http://www.omdbapi.com/) (link: [http://www.omdbapi.com/](http://www.omdbapi.com/)) on how to use the API. A user should be able to search for movies through your search form using movie titles. Basically, the form should have the following components:
  - A search bar
  - Submit button

When a user presses Submit, use the OMDB API to list each movie underneath the search form. For each movie returned from the API, render the components listed below in a grid layout.
  - Title and Year
  - Image (display the image from the image source provided)
  - A delete button

Grid Layout Example:
![grid layout example](https://storage.googleapis.com/support-forums-api/attachment/thread-2456609-676079104261257749.JPG)

When a user clicks on the delete button for a movie, remove the movie that was clicked from the search results. Remove the movie from React/Redux state directly instead of hiding the movie result using CSS.

### 3. Bonus Points ###
*Note: this is completely optional, but feel free to showcase your skills!*

  1. As a travel company, a big part of GetLost's engineering focus is on user experience. As such, you get bonus points for making the application look clean. A CSS framework like [Bootstrap](https://react-bootstrap.github.io/) or [Material UI](https://material-ui.com/) could be good tools to use
  2. Use Redux instead of React state when fetching movie data
  3. Implement mobile responsiveness into the web application

### 4. Useful Information ###
  - We suggest using [create-react-app](https://github.com/facebook/create-react-app) to quickly get a React project up and running quickly.
  - Using an NPM module such as [axios](https://www.npmjs.com/package/axios) will make life easier when making HTTP calls in React.

### 5. How to Submit Project: ###
Email engineering@flygetlost.com with the following information:
  1. A link to the web application (*Note: Feel free to host this however you like — free platforms that help you host your React apps include [Heroku](https://heroku.com/) and [Github](https://github.com/). Consult [this guide](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae) on how to deploy to Heroku.*)
  2. A link to Github with the source code for this project. (*Note: Remember to make it publicly accessible so we can see your awesome work :)*)
