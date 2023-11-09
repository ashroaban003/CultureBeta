import React, { useState } from "react";
import { OpenAI } from "openai";
import "./ChatBot.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const sendMessage = async () => {
    setResponse("");
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a cultural chatbot focusing exclusively on Indian cultures. Your primary aim is to educate the user regarding the beauty and diversity of Indian Culture. You SHOULD NOT ANSWER ANY QUESTION UNRELATED TO INDIAN CULTURE.",
          },
          { role: "user", content: prompt },
        ],
      });

      setResponse(response.choices[0].message.content);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse("An error occurred while processing your request.");
    }
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
      //<audio src={res.data} controls autoPlay/>
      //<AudioPlayer source={res.data}/>
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ChatBot" style={{ height: "100vh" }}>
      <Navbar />
      <div className="container">
        <h1 className="botName">Culture Bot</h1>
        <div className="input-bar">
          <input
            type="text"
            className="Prompt"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="search-button" onClick={sendMessage}>
            Send
          </button>
        </div>
        <div className="response">{response}</div>
        <p className="warning">
          {" "}
          <span style={{ fontWeight: "bold" }}>Warning</span>: Please don't
          submit more than three requests within a minute.
        </p>
        <button className="tts-button" onClick={handleTTSreq}>
          Hear
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
