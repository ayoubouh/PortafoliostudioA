import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
};

export const AiChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, dir } = useLanguage();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setIsTyping(true);
      setTimeout(() => {
        addMessage("bot", t("chatbot.greeting"));
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const addMessage = (role: "bot" | "user", content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        role,
        content,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    addMessage("user", text);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = t("chatbot.response.default");
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("offres") || lowerText.includes("service") || lowerText.includes("خدمات")) {
        response = t("chatbot.response.services");
      } else if (lowerText.includes("contact") || lowerText.includes("mail") || lowerText.includes("phone") || lowerText.includes("اتصال")) {
        response = t("chatbot.response.contact");
      } else if (lowerText.includes("portfolio") || lowerText.includes("projet") || lowerText.includes("work") || lowerText.includes("أعمال")) {
        response = t("chatbot.response.portfolio");
      }

      addMessage("bot", response);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] shadow-2xl rounded-2xl overflow-hidden border border-primary/20 bg-background`}
            dir={dir}
          >
            <Card className="border-0 h-[500px] flex flex-col shadow-none">
              <CardHeader className="bg-primary/10 p-4 flex flex-row items-center justify-between space-y-0 border-b border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                      AI Assistant <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
                    </CardTitle>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 overflow-hidden bg-secondary/5 relative">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4 flex flex-col pb-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-3 max-w-[85%] ${
                          msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                          }`}
                        >
                          {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div
                          className={`p-3 rounded-2xl text-sm ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-none rtl:rounded-tr-2xl rtl:rounded-tl-none"
                              : "bg-background border border-border shadow-sm rounded-tl-none rtl:rounded-tl-2xl rtl:rounded-tr-none"
                          }`}
                        >
                          {msg.content}
                          <span className="text-[10px] opacity-50 block mt-1 text-right">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-3 max-w-[85%] self-start">
                        <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-background border border-border shadow-sm p-3 rounded-2xl rounded-tl-none rtl:rounded-tl-2xl rtl:rounded-tr-none flex gap-1 items-center h-10">
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" />
                        </div>
                      </div>
                    )}
                    <div ref={scrollRef} />
                  </div>
                </ScrollArea>

                {/* Quick Options */}
                {messages.length === 1 && !isTyping && (
                  <div className="absolute bottom-4 left-0 right-0 px-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full text-xs h-7 border-primary/20 bg-background hover:bg-primary/5" onClick={() => handleOptionClick(t("chatbot.option.services"))}>
                      {t("chatbot.option.services")}
                    </Button>
                    <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full text-xs h-7 border-primary/20 bg-background hover:bg-primary/5" onClick={() => handleOptionClick(t("chatbot.option.portfolio"))}>
                      {t("chatbot.option.portfolio")}
                    </Button>
                    <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full text-xs h-7 border-primary/20 bg-background hover:bg-primary/5" onClick={() => handleOptionClick(t("chatbot.option.contact"))}>
                      {t("chatbot.option.contact")}
                    </Button>
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-3 border-t border-border bg-background">
                <form
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Input
                    placeholder={t("chatbot.placeholder")}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 h-10 rounded-full border-primary/20 focus-visible:ring-primary/20"
                  />
                  <Button type="submit" size="icon" className="h-10 w-10 rounded-full shrink-0" disabled={!inputValue.trim() || isTyping}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </>
  );
};
