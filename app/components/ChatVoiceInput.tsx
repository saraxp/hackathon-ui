import { Button } from "@/components/ui/button";
import MicIcon from '@mui/icons-material/Mic';

export function ChatVoiceInput() {
  return (
    <Button
      className="rounded-full w-14 h-14 bg-[#F6D8D6] border border-[#A882A0] hover:bg-[#D8A39D]/50 shadow-md transition-colors"
      variant="ghost"
      size="icon"
    >
      <MicIcon style={{ color: '#A882A0' }} />
    </Button>
  );
}

