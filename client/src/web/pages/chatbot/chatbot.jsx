import React, { useState } from 'react';
import { OpenAI } from 'openai';
import './chatgpt.css';

const ChatGPT = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const sendMessage = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a cultural chatbot focusing exclusively on Indian cultures. Your primary',
          },
          { role: 'user', content: prompt },
        ],
      });

      setResponse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('An error occurred while processing your request.');
    }
  };

  return (
    <div className='container'>
      <h1>Culture Bot</h1>
      <div className='input-bar'>
        <input
          type='text'
          className='Prompt'
          style={{ color: 'black' }}
          placeholder='Type your message...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className='search-button' onClick={sendMessage}>
          Send
        </button>
      </div>
      <div className='response'>{response}</div>
      <p style={{color: 'black'}}> Warning: Please don't submit more than three requests within a minute.</p>
    </div>
  );
};

export default ChatGPT;
