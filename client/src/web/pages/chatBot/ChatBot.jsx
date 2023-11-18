import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";
import "./ChatBot.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Bharat from "../../../images/indian-man.svg"
import Bharathi from "../../../images/indian-woman.svg";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [isfemale, setisfemale] = useState(false);
  const [response, setResponse] = useState("");
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [hear, sethear] = useState(true);
  const [send, setsend] = useState(true);
  const [botImage, setBotImage] = useState(Bharat);


  const handleLanguageChange = async (language) => {
    sethear(false);
    setsend(false);
    setSelectedLanguage(language);
    
  };


  const translateText = async (text, targetLanguage) => {
    try {
      const apiKey = 'fuckyou';
      const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
      const response = await axios.post(url, {
        q: text,
        target: targetLanguage,
      });
  
      const translatedText = response.data.data.translations[0].translatedText;
      console.log(`Translated text to ${targetLanguage}: ${translatedText}`);
      return translatedText
    } catch (error) {
      console.error('Translation error:', error.response.data.error.message);
      return text
    }
  };
  

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const sendMessage = () => {
    setsend(true);
    console.log({ prompt });
    setResponse("");
  
    return openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a cultural chatbot focusing exclusively on Indian cultures. Your primary aim is to educate the user regarding the beauty and diversity of Indian Culture. You SHOULD NOT ANSWER ANY QUESTION UNRELATED TO INDIAN CULTURE.",
          },
          {
            role: "system",
            content:
              "Limit your answers to 3 or 4 lines. Dont write more than 200 words",
          },
          { role: "user", content: prompt },
        ],
      })
      .then(async (response) => {
        let gptResponse = response.choices[0].message.content;
  
        // Translate the response based on the selected language
        let translation = "";
        if (selectedLanguage === "tamil") {
          translation = await translateText(gptResponse, 'ta');
        } else if (selectedLanguage === "telugu") {
          translation = await translateText(gptResponse, 'te');
        } else if (selectedLanguage === "marathi") {
          translation = await translateText(gptResponse, 'mr');
        } else if (selectedLanguage === "punjabi") {
          translation = await translateText(gptResponse, 'pa');
        } else if (selectedLanguage === "kannada") {
          translation = await translateText(gptResponse, 'kn');
        } else if (selectedLanguage === "hindi") {
          translation = await translateText(gptResponse, 'hi');
        } else {
          translation = gptResponse;
        }
  
        setResponse(translation);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setResponse("An error occurred while processing your request.");
      });
  };
  

  const handleTTSreq = async () => {
    sethear(true);
    try {
      console.log(response);
      const val = {
        text: response,
      };
      console.log({selectedLanguage});
      const url = `http://localhost:4000/api/tts/${selectedLanguage}`
      const res = await axios.post(url, val);
      console.log(res);
      const audioBase64 = res.data.audioResponse;

      // Create an audio element
      const audio = new Audio();

      // Set the base64 audio data as the audio source
      audio.src = `data:audio/mpeg;base64,${audioBase64}`;

      // Play the audio
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  const handleTTSreqFEMALE = async () => {
    sethear(true);
    try {
      console.log(response);
      const val = {
        text: response,
      };
      const res = await axios.post("http://localhost:4000/api/tts/female", val);
      console.log(res);
      const audioBase64 = res.data.audioResponse;

      // Create an audio element
      const audio = new Audio();

      // Set the base64 audio data as the audio source
      audio.src = `data:audio/mpeg;base64,${audioBase64}`;

      // Play the audio
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  // Speech recognition functions
  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const toggleGender = () => {
    sethear(false);
    console.log(isfemale);
    setBotImage(!isfemale?Bharathi:Bharat);
    setisfemale(!isfemale);
  };

  const handleTTSrequest = () => {
    if (isfemale) {
      console.log("in is female");
      handleTTSreqFEMALE();
    } else {
      handleTTSreq();
    }
  };
  useEffect(() => {
    // Handle transcript change when listening
    if (listening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-IN";
      recognition.continuous = true;

      let fullTranscript = "";

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const currentTranscript = event.results[i][0].transcript;
          fullTranscript += currentTranscript + " ";
        }

        // Update the state with the full transcript
        setTranscript(fullTranscript.trim());
        setPrompt(fullTranscript.trim());
      };

      recognition.start();

      return () => {
        recognition.stop();
      };
    }
  }, [listening]);

  return (
    <div className="ChatBot" style={{ height: "100vh" }}>
      <Navbar />
      <div className="container">
        <div className="containerMain">
 <div style={{width: "5rem", height:"5rem", position:"absolute", right:"35%", top:"22%"}}>
          <img src={botImage} style={{width: "5rem", height:"5rem", objectFit:"cover", borderRadius:"50%"}}></img>
        </div>
          <h1 className="botName">Culture Bot</h1>
          <button
            className="button toggleGenderButton"
            onClick={toggleGender}
            style={{ position: "absolute", right: "25%", top:"25%"}}
          >
            Talk to {isfemale?<span>Bharath</span>:<span>Bharathi</span>}
          </button>
          <div className="language-dropdown">
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="punjabi">Punjabi</option>
              <option value="marathi">Marathi</option>
              <option value="kannada">Kannada</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div className="input-bar">
            <input
              type="text"
              className="Prompt"
              placeholder="Type your message..."
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value)
                sethear(false)
                setsend(false)}}
            />
            {/* Speech recognition buttons */}
            {listening ? (
              <button
                className="button"
                onClick={stopListening}
                style={{ position: "relative", left: "1rem" }}
              >
                Stop Listening
              </button>
            ) : (
              <i
                className="fa fa-microphone"
                style={{
                  fontSize: "48px",
                  cursor: "pointer",
                  position: "relative",
                  left: "5px",
                  right: "1rem",
                }}
                onClick={startListening}
              ></i>
            )}
            <button
              className="search-button"
              style={{ marginLeft: "30px" }}
              onClick={sendMessage}
              disabled={send}
            >
              Send
            </button>
          </div>
          <div className="response">{response}</div>
          <p className="warning">
            <span style={{ fontWeight: "bold" }}>Warning</span>: Please don't
            submit more than three requests within a minute.
          </p>

          {/* Display transcript in the component */}
          <p>Transcript: {transcript}</p>
          <button className="search-button" onClick={handleTTSrequest} disabled={hear}>
            Hear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
