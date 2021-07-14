<p align="center">
  <a href="https://search-as-you-type.herokuapp.com/" >
 <img width=20px height=20px src="./client/public/icons8-search-48.png" alt="Project logo"></a>
 <h3 align="center">Searcher</h3>
</p>

<hr>
<p align="center"> Search as you type
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

Search as you type is an app where using input field user can search for clients. The app grabs data from its server.

## Deployment <a name = "deployment"></a>

The app is deployed to Heroku - https://search-as-you-type.herokuapp.com/
Also it can be run locally by using 'npm run dev' command
The api can be found on `http://localhost:3001/api/clients`

## 🎈 Usage <a name="usage"></a>

The main purpose of the app is to search for clients using next parameters:

- by first + last name;
- by first + last name and/or country of origin.
  The data comes from the JSON file.

After entering the search query user receives suggestion list to choose from. The user can use keyboard to move from one suggestion to another:

- arrow down - to move down the suggestion list;
- arrow up - to move up;
- enter - to choose one from the suggestions.
  There can be only 10 users shown at a time.

## ⛏️ Built Using <a name = "built_using"></a>

The backend part was written using Node.js, and the frontend using React.
