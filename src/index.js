import express from "express";
import {
  apiRouter,
  apiV1Router,
  apiV2Router,
  courseController,
  userRouter,
} from "./controllers";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Server is Running : localhost:${PORT}`);
};

app.use("/", userRouter);
app.use("/courses", courseController);
app.use("/api", apiRouter);
app.use("/api/v1", apiV1Router);
app.use("/api/v2", apiV2Router);

// Codesanbox does not need PORT :)
app.listen(PORT, handleListening);
