import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageCircle, PlusCircle, PlusIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

interface ChatHistoryProps {
  conversations: { id: string; title: string }[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function ChatHistory({ conversations, selectedId, onSelect }: ChatHistoryProps) {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Chat History</h2>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
          <PlusIcon />
        </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Link href="/chat">New Chat</Link>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {conversations.map((conversation) => (
            <Button
              key={conversation.id}
              variant={selectedId === conversation.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onSelect(conversation.id)}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {conversation.title}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
