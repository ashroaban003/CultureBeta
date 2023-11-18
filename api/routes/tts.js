const express = require("express");
const { gen_audio } = require("../tts.js");
const router = express.Router();

router.post("/english", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const x = await gen_audio({ text });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/female", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        console.log("in female route");
        const lang = "female"
        const x = await gen_audio({ text, lang});
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/tamil", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "tamil";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/kannada", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "kannada";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/marathi", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "marathi";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/punjabi", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "punjabi";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/telugu", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "telugu";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

router.post("/hindi", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  try {
    (async () => {
      try {
        const lang = "hindi";
        const x = await gen_audio({ text, lang });
        //console.log(x);
        if (Array.isArray(x) && x.length > 0) {
          const firstResponse = x[0];

          if (firstResponse && firstResponse.audioContent) {
            const sendable = firstResponse.audioContent;
            const base64Audio = sendable.toString("base64");
            res.status(200).json({ audioResponse: base64Audio });
          } else {
            console.error("No valid audio content found in the response");
          }
        } else {
          console.error("No valid responses found in the array");
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    })();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to synthesize audio" });
  }
});

module.exports = router;
