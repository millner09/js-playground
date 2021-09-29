const gTTS = require("gtts");
const axios = require("axios").default;

header = {
  headers: { Accept: "application/json", "User-Agent": "axios 0.21.4" },
};
url = "https://icanhazdadjoke.com/";

const getjoke = async () => {
  const res = await axios.get(url, header);
  console.log(res.data);
  var gtts = new gTTS(res.data.joke, "en");
  gtts.save("Voice.mp3", function (err, result) {
    if (err) {
      throw new Error(err);
    }
    console.log("Text to speech converted!");
  });
};

getjoke();
