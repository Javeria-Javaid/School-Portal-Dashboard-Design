import { useState } from 'react';
import { Send, Search, Star, MoreVertical, Paperclip } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent',
    lastMessage: 'Thank you for the update on my child\'s progress.',
    time: '10:30 AM',
    unread: 2,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Teacher',
    lastMessage: 'The grade 8 exam schedule has been finalized.',
    time: '9:45 AM',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 3,
    name: 'Uniforms Plus',
    role: 'Vendor',
    lastMessage: 'The new uniform samples are ready for review.',
    time: 'Yesterday',
    unread: 1,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vendor1'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Parent',
    lastMessage: 'Can we schedule a meeting to discuss my son\'s admission?',
    time: 'Yesterday',
    unread: 3,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'Teacher',
    lastMessage: 'Submitted the monthly report.',
    time: '2 days ago',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
  },
];

const messages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    content: 'Hello, I wanted to inquire about the admission process for my daughter.',
    time: '10:15 AM',
    isMe: false
  },
  {
    id: 2,
    sender: 'Me',
    content: 'Hello Sarah! I\'d be happy to help. Which grade is your daughter applying for?',
    time: '10:18 AM',
    isMe: true
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    content: 'She would be applying for Grade 8. What documents are required?',
    time: '10:20 AM',
    isMe: false
  },
  {
    id: 4,
    sender: 'Me',
    content: 'For Grade 8 admission, you\'ll need: birth certificate, last 2 years report cards, transfer certificate, and passport-size photos. Would you like me to email you the complete checklist?',
    time: '10:25 AM',
    isMe: true
  },
  {
    id: 5,
    sender: 'Sarah Johnson',
    content: 'Thank you for the update on my child\'s progress.',
    time: '10:30 AM',
    isMe: false
  },
];

export function Communication() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && messageInput.trim()) {
      handleSendMessage();
    }
  };

  return (
      <div className="space-y-8">
        <div>
          <h1 className="text-gray-900 mb-2">Communication</h1>
          <p className="text-gray-600">Messages and conversations</p>
        </div>

        <Card className="rounded-2xl border-0 shadow-sm overflow-hidden">
          <Tabs defaultValue="inbox" className="w-full">
            <div className="border-b border-gray-200 px-6 pt-6">
              <TabsList className="bg-gray-50 rounded-xl p-1">
                <TabsTrigger value="inbox" className="rounded-lg">Inbox</TabsTrigger>
                <TabsTrigger value="flagged" className="rounded-lg">Flagged</TabsTrigger>
                <TabsTrigger value="support" className="rounded-lg">Support Tickets</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="inbox" className="m-0">
              <div className="grid grid-cols-3 h-[600px]">
                {/* Conversations List */}
                <div className="col-span-1 border-r border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                          placeholder="Search conversations..."
                          className="pl-10 bg-gray-50 border-0 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="overflow-y-auto h-[calc(600px-73px)]">
                    {conversations.map((conversation) => (
                        <div
                            key={conversation.id}
                            onClick={() => setSelectedChat(conversation)}
                            className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                                selectedChat.id === conversation.id ? 'bg-sky-50' : 'hover:bg-gray-50'
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={conversation.avatar} />
                              <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-sm text-gray-900 truncate">{conversation.name}</p>
                                <span className="text-xs text-gray-500">{conversation.time}</span>
                              </div>
                              <Badge
                                  variant="outline"
                                  className={`text-xs mb-2 ${
                                      conversation.role === 'Parent'
                                          ? 'bg-sky-50 text-sky-700 border-sky-200'
                                          : conversation.role === 'Teacher'
                                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                              : 'bg-violet-50 text-violet-700 border-violet-200'
                                  }`}
                              >
                                {conversation.role}
                              </Badge>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-600 truncate">{conversation.lastMessage}</p>
                                {conversation.unread > 0 && (
                                    <Badge className="ml-2 bg-emerald-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                                      {conversation.unread}
                                    </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="col-span-2 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedChat.avatar} />
                        <AvatarFallback>{selectedChat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-gray-900">{selectedChat.name}</p>
                        <p className="text-xs text-gray-500">{selectedChat.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-lg">
                        <Star className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${message.isMe ? 'order-2' : 'order-1'}`}>
                            <div
                                className={`rounded-2xl p-4 ${
                                    message.isMe
                                        ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white'
                                        : 'bg-white text-gray-900 border border-gray-200'
                                }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                            <p className={`text-xs text-gray-500 mt-1 ${message.isMe ? 'text-right' : 'text-left'}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-end gap-3">
                      <Button variant="ghost" size="icon" className="rounded-lg">
                        <Paperclip className="w-5 h-5 text-gray-600" />
                      </Button>
                      <div className="flex-1">
                        <Input
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type your message..."
                            className="bg-gray-50 border-0 rounded-xl"
                            onKeyPress={handleKeyPress}
                        />
                      </div>
                      <Button
                          onClick={handleSendMessage}
                          className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="flagged" className="p-8">
              <div className="text-center py-12">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No flagged messages</p>
              </div>
            </TabsContent>

            <TabsContent value="support" className="p-8">
              <div className="text-center py-12">
                <p className="text-gray-500">No support tickets</p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
  );
}