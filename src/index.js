import app from "./app.js";
import { port } from "./config.js";

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
