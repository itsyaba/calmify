"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChatHistory } from "@/components/chat/chat-history";
import { ModelCard } from "@/components/chat/model-card";
import { ChatInput } from "@/components/chat/chat-input";
import { Separator } from "@/components/ui/separator";
import {  useToast } from "@/hooks/use-toast";
import Loader from "@/components/loader";

const models = [
  {
    id: "sunny",
    title: "Sunny",
    description:
      "Your cheerful companion, always ready to brighten your day with uplifting advice and friendly conversation.",
    avatar: "URL_TO_SUNNY_IMAGE",
  },
  {
    id: "mr-sage",
    title: "Mr. Sage",
    description:
      "The wise, dependable figure who listens patiently and offers calm, fatherly guidance.",
    avatar: "URL_TO_MR_SAGE_IMAGE",
  },
  {
    id: "zenith",
    title: "Zenith",
    description:
      "Embodies inner peace and mindfulness, helping you find clarity through meditative and reflective advice.",
    avatar: "URL_TO_ZENITH_IMAGE",
  },
  {
    id: "chase",
    title: "Chase",
    description:
      "Charming and playful, Chase adds humor and lightheartedness to your conversations while making you feel appreciated.",
    avatar: "URL_TO_CHASE_IMAGE",
  },
];


const mockConversations = [
  { id: "1", title: "Mental Health Check-in" },
  { id: "2", title: "Stress Management" },
  { id: "3", title: "Anxiety Discussion" },
];

export default function ChatPage() {
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState<string>();
  const [selectedChat, setSelectedChat] = useState<string>();

  if (status === "unauthenticated") {
    toast({
      title: "Please login before continuing",
      variant: "destructive",
    });
    router.push("/login");
    return null;
  }

  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader size={24} />{" "}
      </div>
    );
  }

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="hidden w-60 border-r md:block">
        <ChatHistory
          conversations={mockConversations}
          selectedId={selectedChat}
          onSelect={setSelectedChat}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-auto p-4">
          {!selectedModel ? (
            <div className="space-y-4 h-full flex items-center justify-center flex-col">
              <h1 className="text-2xl  font-pontanoSans">Select Model</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {models.map((model) => (
                  <ModelCard
                    key={model.id}
                    title={model.title}
                    description={model.description}
                    isSelected={selectedModel === model.id}
                    onSelect={() => setSelectedModel(model.id)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Chat messages will go here */}
              <div className="flex-1" />
            </div>
          )}
        </div>

        <Separator />

        <ChatInput onSend={handleSendMessage} disabled={!selectedModel} />
      </div>
    </div>
  );
}
