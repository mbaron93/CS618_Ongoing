import { createUser, loginUser, getUserInfoById } from "../services/users.js";

export function userRoutes(app) {
  app.post("/user/signup", async (req, res) => {
    try {
      const user = await createUser(req.body);
      return res.status(201).json({ username: user.username });
    } catch (err) {
      return res.status(400).json({
        error: "failed to create the user, does the username already exist?",
      });
    }
  });

  app.post("/user/login", async (req, res) => {
    try {
      const token = await loginUser(req.body);
      return res.status(200).send({ token });
    } catch (err) {
      return res.status(400).send({
        error: "login failed, did you enter the correct username/password?",
      });
    }
  });

  app.get("/users/:id", async (req, res) => {
    const userInfo = await getUserInfoById(req.params.id);
    return res.status(200).send(userInfo);
  });
}
