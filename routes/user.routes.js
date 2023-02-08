module.exports = app =>{
    const user = require("../controllers/user.controllers.js");
    const express = require("express");
    const router = express.Router();

    router.post('/register',user.register);
    router.post('/login',user.login);

    app.use("/api", router);
}