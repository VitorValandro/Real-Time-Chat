# Real Time Chat
![Interface screenshots](https://user-images.githubusercontent.com/50156875/102108935-46050680-3e12-11eb-9a71-d373ced2c710.jpg)
This was my first test using the socket.io package. The back-end was made using NodeJS with Express, the front-end using React and the socket.io to integrate both.

## About the project
I made this app on my winter vacation of 2020 based on the socket.io documentation (I already knew how to program with NodeJS and React) and some video tutorials. The project aimed to improve my skills with web aplications, NodeJS APIs, React interfaces and learn about web sockets and real-time connections. Think I achieved the expected result.

I've learned how to deploy applications using netlify (to front-end) and heroku (to back-end API) too. The result can be found [here](https://react-node-realtime-chat.netlify.app). To enter in a room type an username and the name of the room, then just start to chat!

## 🛠 Built with

- ⚛️ **React Js** — Front-end
- 💹 **Node Js** — Back-end
- 🎲 **Socket.IO** — For back-end and frontend realtime communication

## 🚀 How to use

The application is divided in two parts: the front-end and the backend. Both of them are here in this repo, so you just need to clone it and set up:

### Requirements

- Git
- NodeJS

### 💻 Server setup

Clone the repository

```bash

# Clone the repo
git clone https://github.com/VitorValandro/Real-Time-Chat

```

Go to project's root diretory and run the commands below:

```bash

cd server

# Install dependencies
npm install

# Starts server
npm start

# Access http://localhost:5000 to see the server running

```

### 🖥 Web setup

First clone the repository if you haven't done it yet:

```bash

# Clone the repo
git clone https://github.com/VitorValandro/Real-Time-Chat
```

Go to project's root diretory and run the commands below:

```bash

cd client

# Install dependencies
npm install

```

After install all packages run the commands below:

```bash

# Starts web app
npm start

# Access http://localhost:3000 to use the app

```


### Project finished and closed
The application have simple features, but the purpose of the project was learn how to use web sockets to make real-time applications and understand how packets and messages travel in real-time on low-level, not really making the new Telegram (but on second thought, it wouldn't be a bad idea).

###### Vitor Matheus Valandro da Rosa. July 2020.
