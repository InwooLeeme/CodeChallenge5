import express from "express";

export const userRouter = express.Router();
export const courseController = express.Router();
export const apiRouter = express.Router();
export const apiV1Router = express.Router();
export const apiV2Router = express.Router();

// home zone
userRouter.get("/", userHome);
userRouter.get("/join", userJoin);
userRouter.get("/login", userLogin);
userRouter.get("/confirm-account", uesrConfirmAccount);

// user function
const userHome = (req, res) => res.send("Home");
const userJoin = (req, res) => res.send("join");
const userLogin = (req, res) => res.send("login");
const uesrConfirmAccount = (req, res) => res.send("confirm-account");

// course zone
courseController.get("/");
courseController.get("/new");
courseController.get("/mine");

// course function
const courseHome = (req, res) => res.send("course home");
const courseNew = (req, res) => res.send("course new");
const courseMine = (req, res) => res.send("course mine");

// api

apiRouter.get("/documentation", (req, res) => res.send("Api Documentation"));

// api/v1 zone

apiV1Router.get("/buy", (req, res) => res.send("/api/v1/buy"));
apiV1Router.get("/refund", (req, res) => res.send("/api/v1/refund"));

// api/v2 zone

apiV2Router.get("/remove", (req, res) => res.send("/api/v2/remove"));
apiV2Router.get("/edit", (req, res) => res.send("/api/v2/edit"));
