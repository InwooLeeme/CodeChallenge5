import express from "express";

export const userRouter = express.Router();
export const courseController = express.Router();
export const apiRouter = express.Router();
export const apiV1Router = express.Router();
export const apiV2Router = express.Router();

// home zone
userRouter.get("/", uesrHome);
userRouter.get("/join", uesrJoin);
userRouter.get("/login", uesrLogin);
userRouter.get("/confirm-account", userConfirmAccount);

// Home Function
function uesrHome(req, res) {
  res.send("Home");
}
function uesrJoin(req, res) {
  res.send("Join");
}
function uesrLogin(req, res) {
  res.send("Login");
}
function userConfirmAccount(req, res) {
  res.send("confirm-account");
}
// course zone
courseController.get("/", courseHome);
courseController.get("/new", courseNew);
courseController.get("/mine", courseMine);

//course Function
function courseHome(req, res) {
  res.send("course home");
}
function courseNew(req, res) {
  res.send("course new");
}
function courseMine(req, res) {
  res.send("course mine");
}
// api

apiRouter.get("/documentation", apiDocumentation);

// api/v1 zone

apiV1Router.get("/buy", apiBuy);
apiV1Router.get("/refund", apiRefund);

// api/v2 zone

apiV2Router.get("/remove", apiRemove);
apiV2Router.get("/edit", apiEdit);

// Api Function

function apiDocumentation(req, res) {
  res.send("Api Documentation");
}
function apiBuy(req, res) {
  res.send("/api/v1/buy");
}
function apiRefund(req, res) {
  res.send("/api/v1/refund");
}
function apiRemove(req, res) {
  res.send("/api/v2/remove");
}
function apiEdit(req, res) {
  res.send("/api/v2/edit");
}
