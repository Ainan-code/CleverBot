import app from "./app.js";
import {connectToDatabase} from "./db/db.js";



app.get("/", (req, res) => {
     res.send("Hello Ainan");
});

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
  app.listen(`${PORT}`, () => {
    console.log(`Server is running on port ${PORT}`);
});
}).catch((error) => { console.log(error); });






