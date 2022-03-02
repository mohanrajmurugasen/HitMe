const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const cors = require("cors");
const db = require("./models");
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use("/", routes);

const users = {};

io.on("connection", (socket) => {
    console.log("Someone connected and socket id: " + socket.id);
    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);
        for(let user in users) {
            if(users[user] === socket.id) {
                delete users[user]
            }
        }
        io.emit("all_user",users);
    })
    socket.on("new_user", (username) => {
        console.log(username);
        users[username] = socket.id;
        io.emit("all_user",users);
    })
});

db.sequelize.sync().then(() => {
    httpServer.listen(7000, () => {
        console.log("server listening on port 7000");
    })
})