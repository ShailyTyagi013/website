import React from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#007bff',
  headerFontColor: '#fff',
  botBubbleColor: '#007bff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  { id: '1', message: 'Hello! How can I assist you?', trigger: '2' },
  { id: '2', options: [{ value: 1, label: 'Services', trigger: '3' }, { value: 2, label: 'Contact Info', trigger: '4' }] },
  { id: '3', message: 'We offer Web Development, Mobile Apps, and Cloud Solutions.', end: true },
  { id: '4', message: 'You can contact us at contact@itcompany.com.', end: true },
];

const ChatbotComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
