import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <a
        href="https://wa.me/212621695312"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </Button>
  );
};
