export default {
  secret: process.env.JWT_SECRET || "supersecreto",
  expiresIn: "30d"
};
