import React from 'react';
import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleClick}
              className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] animate-bounce hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-7 h-7" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-white text-gray-900 font-medium py-2 px-4 shadow-lg rounded-xl mb-2 mr-2">
            <p>Chat with us</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
