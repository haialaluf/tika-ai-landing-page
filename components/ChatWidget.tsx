import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { ChatMessage } from "../types";
import { sendMessageToGemini } from "../services/geminiService";
import { keyframes, styled } from "styled-components";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hello! I am the TIKA.AI assistant. How can I help you transform your business today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);

      const botMessage: ChatMessage = {
        role: "model",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I'm having trouble connecting right now. Please try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrap>
      {/* Chat Window */}
      {isOpen && (
        <Window>
          {/* Header */}
          <Header>
            <HeaderLeft>
              <OnlineDot />
              <HeaderTitle>TIKA.AI INTELLIGENCE</HeaderTitle>
            </HeaderLeft>
            <IconButton
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </IconButton>
          </Header>

          {/* Messages Area */}
          <Messages>
            {messages.map((msg, idx) => (
              <Row key={idx} $align={msg.role === "user" ? "right" : "left"}>
                <Bubble $variant={msg.role === "user" ? "user" : "model"}>
                  {msg.text}
                </Bubble>
              </Row>
            ))}
            {isLoading && (
              <Row $align="left">
                <LoadingBubble>
                  <SpinningLoader size={16} />
                  <ThinkingText>Thinking...</ThinkingText>
                </LoadingBubble>
              </Row>
            )}
            <div ref={messagesEndRef} />
          </Messages>

          {/* Input Area */}
          <Form onSubmit={handleSendMessage}>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about our AI services..."
            />
            <SendButton
              type="submit"
              disabled={isLoading || !inputValue.trim()}
            >
              <Send size={18} />
            </SendButton>
          </Form>
        </Window>
      )}
    </Wrap>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningLoader = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
`;

const Wrap = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Window = styled.div`
  margin-bottom: 16px;
  width: 350px;
  height: 500px;
  background: ${({ theme }) => theme.colors.tika.gray};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  animation: ${fadeIn} 220ms ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 400px;
  }
`;

const Header = styled.div`
  background: ${({ theme }) => theme.colors.tika.black};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.green[500]};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

const HeaderTitle = styled.span`
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.08em;
`;

const IconButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[400]};
  padding: 6px;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(18, 18, 18, 0.5);
`;

const Row = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  justify-content: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
`;

const Bubble = styled.div<{ $variant: "user" | "model" }>`
  max-width: 80%;
  padding: 12px;
  font-size: 14px;
  border-radius: 12px;
  white-space: pre-wrap;

  ${({ $variant, theme }) =>
    $variant === "user"
      ? `
        background: ${theme.colors.white};
        color: ${theme.colors.black};
      `
      : `
        background: rgba(255, 255, 255, 0.10);
        color: ${theme.colors.gray[200]};
      `}
`;

const LoadingBubble = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const ThinkingText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const Form = styled.form`
  padding: 12px;
  background: ${({ theme }) => theme.colors.tika.black};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  transition: border-color 150ms ease;

  &:focus {
    border-color: rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

const SendButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  transition: background 150ms ease, opacity 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
