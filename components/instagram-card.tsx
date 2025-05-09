"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Bookmark, Play, Send, SendHorizontal } from "lucide-react"

interface InstagramCardProps {
  targetUrl: string
  imageUrl: string
  likes: number
  isVideo?: boolean
  avatarUrl?: string
}

export default function InstagramCard({
  targetUrl,
  imageUrl,
  likes,
  isVideo = false,
  avatarUrl = "/placeholder.svg?height=40&width=40",
}: InstagramCardProps) {
  const [isLiked, setIsLiked] = useState(true)
  const [isSaved, setIsSaved] = useState(false)
  const username = "umrahwithagra"
  const followers = "11.9K"
  const profileUrl = "https://www.instagram.com/umrahwithagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="

  return (
    <Card className="max-w-[468px] overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2.5">
        <Link key={profileUrl} href={profileUrl}>
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>DT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{username}</span>
              <span className="text-xs text-muted-foreground">{followers} followers</span>
            </div>
          </div>
        </Link>
        <Button variant="secondary" size="lg" className="cursor-pointer rounded-lg bg-blue-500 text-white h-8 px-3 hover:bg-blue-600">
          View profile
        </Button>
      </CardHeader>
      <Link key={targetUrl} href={targetUrl}>
        <CardContent className="relative aspect-4/5 p-0">
          <div className="relative h-full w-full">
            <Image src={imageUrl || "/placeholder.svg"} alt="Instagram post" fill className="object-cover" />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <Play className="h-12 w-12 text-white" fill="white" />
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3 p-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsLiked(!isLiked)} className="focus:outline-none">
                <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
              </button>
              <button className="focus:outline-none">
                <MessageCircle className="h-6 w-6 text-gray-700" />
              </button>
              <button className="focus:outline-none">
                <Send className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <button onClick={() => setIsSaved(!isSaved)} className="focus:outline-none">
              <Bookmark className={`h-6 w-6 ${isSaved ? "fill-black text-black" : "text-gray-700"}`} />
            </button>
          </div>
          <div className="flex w-full items-center space-x-2">
            <span className="text-sm font-semibold">{likes} likes</span>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Input placeholder="Add a comment..." className="h-9 bg-transparent px-4 text-sm" />
            <div className="flex items-center px-1">
              <SendHorizontal className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}

