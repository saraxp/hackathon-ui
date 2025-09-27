import React from 'react';
import { DropDown } from '../../components/DropDown';
import ChatComponent from '../../components/ChatBubble';
import { ChatTextInput } from '../../components/ChatTextInput';
import { ChatVoiceInput } from '../../components/ChatVoiceInput';
import SuggestedPrompts from '@/app/components/SuggestedPrompts';
//font
import {DM_Sans} from "next/font/google";

const DMsansFont = DM_Sans({
  subsets: ["latin"],
})

const MindTalk = () => {
   return (
    <div className="flex h-screen font-sans bg-[#FAF6F3]">
      
      <main className="flex-1 flex flex-col h-screen w-full overflow-hidden">
        
        <header className="flex-shrink-0 bg-[#FAF6F3]/80 backdrop-blur-sm z-10 border-b border-gray-200">
            <div className="navbar bg-transparent max-w-5xl mx-auto px-4 md:px-5">
                 <div className="navbar-start">
                    {/* The sidebar toggle button can be placed here */}
                 </div>
                 <div className="navbar-center">
                    <h1 className="text-4xl md:text-5xl text-[#A882A0] font-bold">MindTalk</h1>
                 </div>
                 <div className="navbar-end">
                    <DropDown />
                 </div>
            </div>
        </header>

        {/* Chat & Prompts Area: This section grows and scrolls */}
        <div className="flex-1 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-4">
             <div className="py-8">
                <ChatComponent />
             </div>
          </div>
          
          <div className="w-full mt-auto">
            <SuggestedPrompts />
          </div>
        </div>

        {/* Footer: Stays at the bottom, doesn't scroll */}
        <footer className="flex-shrink-0 bg-[#FAF6F3] pt-3 pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex w-full items-center gap-2 md:gap-4">
              <div className="flex-1">
                <ChatTextInput />
              </div>
              <ChatVoiceInput />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default MindTalk
