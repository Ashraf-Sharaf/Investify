import "../../sidebar.css";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
const API_key = "sk-proj-SLWAseI7ZzAJQqQ31Mb2T3BlbkFJ1aAchb3BJ6fV18HMzLOY";


function ChatBot(){

    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.setItem("token", null);
        navigate("/");
      };
      const [typing, setTyping] = useState(false);
      const [messages, setMessages] = useState([
        {
          message: "Hello, I am ChatGPT",
          sender: "ChatGPT",
          direction: "ingoing",
        },
      ]);
    
      const handleSend = async (message) => {
        const newMessage = {
          message: message,
          sender: "user",
          direction: "outgoing",
        };


    return <div className="flex">
    <div className="user-sidebar flex column padding-20 gap-20">
      <div className="landing-nav-logo flex center bottom-border padding-10">
        <img className="logo " src="/images/Investify.png" alt="logo"></img>
      </div>
      <div className="user-sidebar-navigations flex column gap-10 ">
        <div
          className="flex gap-10 user-sidebar-navigation align "
          onClick={() => {navigate('/user/home')}}
        >
          <HomeIcon />
          <h3>Home</h3>
        </div>
        <div
          className="flex gap-10 user-sidebar-navigation align"
          onClick={() => {}}
        >
          <ReviewsIcon />
          <h3>Reviews</h3>
        </div>
        <div
          className="flex gap-10 user-sidebar-navigation align page-shown"
          onClick={() => {}}
        >
          <ComputerIcon />
          <h3>AI</h3>
        </div>
        <div
          className="flex gap-10 user-sidebar-navigation align"
          onClick={() => {}}
        >
          <EventAvailableIcon />
          <h3>Schedule</h3>
        </div>
      </div>
      <div className="user-sidebar-logout flex between align">
        <h3>Logout</h3>
        <LogoutIcon
          className="logout-icon"
          onClick={() => {
            logout();
          }}
        />
      </div>
    </div>
    <div className="chatbot ">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>

            <MessageInput placeholder="type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
}
}
export default ChatBot;