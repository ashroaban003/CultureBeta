import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";
import "./ChatBot.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [isfemale, setisfemale] = useState(false);
  const [response, setResponse] = useState("");
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const sendMessage = () => {
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
          { role: "user", content: prompt },
        ],
      })
      .then((response) => {
        setResponse(response.choices[0].message.content);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setResponse("An error occurred while processing your request.");
      });
  };

  const handleTTSreq = async () => {
    try {
      console.log(response);
      const val = {
        text: response,
      };
      const res = await axios.post("http://localhost:4000/api/tts/", val);
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
    console.log(isfemale);
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
          <h1 className="botName">Culture Bot</h1>
          <button
            className="button"
            onClick={toggleGender}
            style={{ position: "relative", left: "1rem" }}
          >
            Switch Gender
          </button>
          <div className="input-bar">
            <input
              type="text"
              className="Prompt"
              placeholder="Type your message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
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
          <button className="search-button" onClick={handleTTSrequest}>
            Hear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
