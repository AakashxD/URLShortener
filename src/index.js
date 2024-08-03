const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const urlRoute = require("./routes/url");
const URL = require("./models/url");
const connectDB = require("./database/connect");

const PORT = process.env.PORT;
const url = process.env.URL;
const app = express();

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } 
    );
    console.log(entry)
  
    res.redirect('https://' + entry.redirectURL);
  });

app.listen(PORT, () => {
  connectDB(url).then(() => console.log("mongoDB Connected"));

  console.log(`Server is running on port ${PORT}`);
});
