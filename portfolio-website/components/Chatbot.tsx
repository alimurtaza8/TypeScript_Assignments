"use client"

import React, { useEffect,useState,useRef } from "react";
import { Send,X } from "lucide-react";

type Message = {
    text: string,
    isUser: boolean
};

export default function Chatbot(){
    const [isOpen, setIsOpen] = useState(false);
    const [inputMessage,setInputMessage] = useState('');
    const [messages,setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(()=>{
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if(!inputMessage.trim()){
            return;
        }

        // Now Add here user message man...
        const userMessage = {text: inputMessage, isUser: true};
        setMessages(prev => [...prev,userMessage]);

        // Add loading state
        setMessages(prev => [...prev,{text: "...", isUser: false}]);

        try{
            const response = await fetch("/api/chat", {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({message: inputMessage})
            });

            const data = await response.json();

            // Ok Now Here replace loading msg with actuall message

            setMessages(prev => [
                ...prev.slice(0,-1),
                {text: data.text, isUser: false}
            ]);

        } catch {
            setMessages(prev => [
                ...prev.slice(0,-1),
                {text: "Sorry, I'm having trouble responding. Please try again Man...", isUser: false}
            ]);

        }

        setInputMessage('');
    };

    // Ok Great Now Start The design part man..
    return (
        <div className="fixed bottom-8 right-8 z-50">
        {isOpen && (
          <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col">
            {/* Header */}
            <div className="bg-blue-900 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-semibold">My Assistant</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-800 p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
  
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser 
                        ? 'bg-blue-100 text-blue-900' 
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
  
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Ali Murtaza Profession..."
                  className="flex-1 p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}
  
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : 'Chat'}
        </button>
      </div>

    );
       
}