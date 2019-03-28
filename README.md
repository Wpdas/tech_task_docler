# Tech Task Docler (Docler Chat)

This is a project that is part of Docler's internal recruitment process.

You can see the app working for Desktop and Mobile here (video): [Docler Chat (Desktop Mobile)](https://drive.google.com/file/d/1rtgmL86sVZhs93N8G962sEvZlNT-UI8F/view?usp=sharing)

## How it works

The technology chosen to develop the interface of this application was React and Redux for state management using ES6. As mentioned in the task, the [SocketIO](https://socket.io/) was used in the Backend to create simultaneous connection between several user using socket.

In the application on the React side, two HOCs were created to help the project serve one to handle the internationalization of the app (i18Provider) and another to handle the connection of the application to the server (socketIOProvider). The `lazy` loader feature from React was also used. This feature was used to enhance the user experience by reducing the time the first content is rendered on the screen.

The organization chosen for the structure of React and Redux was this:

```
src/
├── components/
├── containers/
└── store/
    └── chat/
        ├── actions.js
        ├── reducer.js
    └── settings/
        ├── actions.js
        ├── reducer.js
    └── user/
        ├── actions.js
        ├── reducer.js

```

All statefull components were placed inside the container folder while the stateless components were placed in the components folder. Some of the stateless componenes have some treatment within themselves that have been solved using [Hooks](https://reactjs.org/docs/hooks-intro.html) for internal state management.

A service has also been created to handle socketIO events throughout the application, that is, the socketService.js file. Through this service, it is possible to easily register listeners for the events returned from the server and also send data.

Events of this service: <br/>
`onConnect` - After user connect to the server <br/>
`onFriendEnter` - When a friend enter to the chat <br/>
`onFriendSendMessage` - When receive message from some friend into the chat <br/>
`onFriendChangeName` - When someone in the chat change his/her name <br/>
`onReceiveBackgroundMessage` - Dispatched when user is not in the Chat screen <br/>

### Class Style and Theme

SASS was used as a class style preprocessor. Using some of its features, it was possible to abstract some help files into the `theme` folder. Basically we have within the theme the default values that are used throughout the project, then a separate file for the Dark theme (\_theme_dark.scss). The Ligh theme is the default theme of the application.

## Setup

Before running the application, it is worthwhile first to look at the `.env.local` file that is at the root of the project. There you find 4 environment variables (at this time was not separated what goes into production or development). The variables are:

```bash
# Default Socket Port
SOCKET_PORT=5001
# HOST ip (optional)
REACT_APP_SOCKET_HOST=10.0.0.2
# Default Socket Port - React Side
REACT_APP_SOCKET_PORT=5001
# Activates DEBUG on server
DEBUG=docler_chat, docler_chat:new_user, docler_chat:new_message, docler_chat:user_change_name
```

The server's default port is 5001 and it must be entered for the `SOCKET_PORT` variable, so it must also be informed to the variable that goes to React `REACT_APP_SOCKET_PORT`. Because the server can be run elsewhere, a variable has been created that is responsible for informing the host, this is `REACT_APP_SOCKET_HOST`. The `DEBUG` variable is used to enable debugging on the server.

If you want to run the application on your local network and let others access the application, simply insert the IP of your machine into `REACT_APP_SOCKET_HOST` and everyone on the same network will be able to access the app. If `REACT_APP_SOCKET_HOST` is undefined, the`localhost` value will be used instead.

## Running the Application

Open the terminal in the project's root directory and type `yarn` to install the dependencies. If you do not have yarn installed, you can run the `npm i -g yarn` command on the terminal. After this step, just run the command `yarn run run_app`. This command will simultaneously execute both the server and the web application.

The app will be runnig on port 5000. Example: http://localhost:5000 or http://10.0.0.2:5000

## Font Awesome Pro License

This project is using Font Awesome svg icons. [See this license to know more.](https://fontawesome.com/license)
