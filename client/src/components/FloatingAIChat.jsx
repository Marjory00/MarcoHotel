// client/src/components/FloatingAIChat.jsx

import React, { useState, useRef, useEffect } from 'react';
import { IoSend, IoChatboxOutline, IoCloseOutline, IoChevronUpOutline, IoChevronDownOutline, IoStarOutline } from 'react-icons/io5'; 

// --- MOCK API FUNCTION ---
const getMockAiResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    // Responses for Featured Questions
    if (lowerMessage.includes('booking availability')) {
        return "You can check our real-time booking availability by navigating to the 'Rooms' page and selecting your desired dates. We look forward to hosting you!";
    }
    if (lowerMessage.includes('amenities')) {
        return "MarcoHotel offers a stunning infinity pool, two oceanfront restaurants, a full-service spa, and complimentary beach gear for all guests.";
    }
    if (lowerMessage.includes('check-in/out time')) {
        return "Standard Check-in is at 3:00 PM and Check-out is at 11:00 AM. Early check-in or late check-out may be available upon request for a small fee.";
    }
    if (lowerMessage.includes('wi-fi password')) {
        return "The Wi-Fi network name is 'MarcoGuest' and the password is 'TropicalParadise'. Enjoy high-speed internet throughout the resort!";
    }
    
    // Simple keyword-based fallback responses
    if (lowerMessage.includes('room') || lowerMessage.includes('book')) {
        return "I can help you with room bookings! Please visit our 'Rooms' page or specify your desired dates.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! I'm Marco, the MarcoHotel AI Assistant. How can I assist with your tropical getaway today?";
    }
    return "Thank you for your message! Our human staff will follow up with you shortly. For immediate help, please call us at (555) MARCO.";
};

// --- FEATURED QUESTIONS DATA ---
const FEATURED_QUESTIONS = [
    { id: 1, text: "Check booking availability" },
    { id: 2, text: "What are the amenities?" },
    { id: 3, text: "What is the Wi-Fi password?" },
    { id: 4, text: "What is the check-in/out time?" },
];


// --- FLOATING CHAT COMPONENT ---
const FloatingAIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'AI', text: "Welcome to MarcoHotel! How can I make your stay better today?" },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to the latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const sendUserMessage = async (userMessage) => {
        if (userMessage.trim() === '' || isLoading) return;

        // 1. Add user message to state
        setMessages(prev => [...prev, { sender: 'User', text: userMessage.trim() }]);
        setInput('');
        setIsLoading(true);

        // 2. Simulate AI response delay and fetching
        setTimeout(async () => {
            const aiResponseText = getMockAiResponse(userMessage);

            // 3. Add AI message to state
            setMessages(prev => [...prev, { sender: 'AI', text: aiResponseText }]);
            setIsLoading(false);
        }, 1500); // 1.5 second delay for realism
    };

    const handleSend = (e) => {
        e.preventDefault();
        sendUserMessage(input);
    };

    const handleFeaturedClick = (questionText) => {
        // Send the question text as the user message
        sendUserMessage(questionText); 
    };

    const getMessageClass = (sender) => {
        return sender === 'User' 
            ? 'bg-tropical-primary text-white ms-auto' 
            : 'bg-light text-dark me-auto';
    };

    // --- RENDER LOGIC ---
    return (
        <div className="ai-chat-container">
            {/* 1. Chat Window (Visible when chat is open) */}
            <div className={`ai-chat-window card shadow-lg ${isOpen ? 'open' : 'closed'}`}>
                
                {/* --- Chat Header --- */}
                <div className="card-header bg-tropical-dark text-white p-3 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0 d-flex align-items-center">
                        <IoChatboxOutline className="me-2 fs-5" />
                        MarcoHotel AI Assistant
                    </h5>
                    <button 
                        className="btn-close-chat text-white" 
                        onClick={() => setIsOpen(false)}
                        title="Close Chat"
                    >
                        <IoChevronDownOutline className="fs-4" /> {/* Changed icon to a down arrow for minimize/close */}
                    </button>
                </div>

                {/* --- Message Display Area --- */}
                <div className="card-body p-3 overflow-y-auto chat-messages-area" style={{ flexGrow: 1 }}>
                    
                    {/* Featured Questions Area (Only shows at the start or if messages are just the welcome message) */}
                    {messages.length <= 1 && (
                        <div className="featured-questions-box p-3 mb-4 rounded bg-tropical-light">
                            <h6 className="text-tropical-dark mb-3 d-flex align-items-center">
                                <IoStarOutline className="me-2 text-tropical-secondary fs-5" />
                                Featured Questions
                            </h6>
                            <div className="d-grid gap-2">
                                {FEATURED_QUESTIONS.map(q => (
                                    <button
                                        key={q.id}
                                        className="btn btn-sm btn-outline-secondary text-start"
                                        onClick={() => handleFeaturedClick(q.text)}
                                        disabled={isLoading}
                                    >
                                        {q.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Conversation History */}
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`d-flex ${msg.sender === 'User' ? 'justify-content-end' : 'justify-content-start'} mb-3`}
                        >
                            <div className={`p-3 rounded-3 shadow-sm ${getMessageClass(msg.sender)}`} style={{ maxWidth: '85%' }}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isLoading && (
                        <div className="d-flex justify-content-start mb-3">
                            <div className="p-3 rounded-3 shadow-sm bg-light text-dark typing-indicator">
                                <span className="dot">.</span>
                                <span className="dot">.</span>
                                <span className="dot">.</span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* --- Input Field --- */}
                <div className="card-footer bg-white p-3">
                    <form onSubmit={handleSend} className="d-flex">
                        <input
                            type="text"
                            className="form-control me-3"
                            placeholder="Ask a question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-tropical-primary d-flex align-items-center"
                            disabled={isLoading || input.trim() === ''}
                        >
                            <IoSend className="fs-5" /> 
                        </button>
                    </form>
                </div>
            </div>
            
            {/* 2. Chat Button (Visible when chat is closed) */}
            {!isOpen && (
                <button 
                    className="chat-toggle-button btn btn-tropical-primary shadow-lg rounded-circle"
                    onClick={() => setIsOpen(true)}
                    title="Open AI Chat"
                >
                    <IoChatboxOutline className="fs-3" />
                </button>
            )}
        </div>
    );
};

export default FloatingAIChat;