'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"
import StraightIcon from '@mui/icons-material/Straight'
import { DM_Sans } from "next/font/google"

const DMsansFont = DM_Sans({ subsets: ["latin"] })

export function ChatTextInput() {
  const [text, setText] = useState("")
   return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cn(
          'h-14 w-full rounded-full pl-5 pr-14 text-base text-[#403635]',
          'bg-[#F6D8D6]/50 border border-[#A882A0] shadow-inner focus-visible:ring-2 focus-visible:ring-[#A882A0]/50 focus-visible:ring-offset-0 placeholder:text-[#403635]/50'
        )}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text.trim()) {
            setText('');
          }
        }}
      />
      {text && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-[#D8A39D] hover:bg-[#A882A0]"
          onClick={() => setText('')}
        >
          <StraightIcon className="text-white" />
        </Button>
      )}
    </div>
  );
}
