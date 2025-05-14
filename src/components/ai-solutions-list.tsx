"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for AI solutions
const AI_SOLUTIONS = [
  {
    id: 1,
    name: "GPT-4o",
    provider: "OpenAI",
    website: "https://openai.com/gpt-4",
    keywords: ["Large Language Model", "Text Generation", "Multimodal"],
    description: "Advanced multimodal AI system capable of processing text and images with human-level understanding.",
  },
  {
    id: 2,
    name: "Claude 3 Opus",
    provider: "Anthropic",
    website: "https://www.anthropic.com/claude",
    keywords: ["Large Language Model", "Text Generation", "Safety"],
    description: "A powerful AI assistant designed with a focus on helpfulness, harmlessness, and honesty.",
  },
  {
    id: 3,
    name: "Gemini Pro",
    provider: "Google",
    website: "https://deepmind.google/technologies/gemini/",
    keywords: ["Multimodal", "Code Generation", "Reasoning"],
    description: "Google's most capable AI model for text, code, images, and multimodal reasoning.",
  },
  {
    id: 4,
    name: "DALL-E 3",
    provider: "OpenAI",
    website: "https://openai.com/dall-e-3",
    keywords: ["Image Generation", "Text-to-Image", "Creative"],
    description: "Advanced AI system that creates realistic images and art from natural language descriptions.",
  },
  {
    id: 5,
    name: "Midjourney",
    provider: "Midjourney",
    website: "https://www.midjourney.com",
    keywords: ["Image Generation", "AI Art", "Creative"],
    description: "AI-powered tool that generates images from textual descriptions, known for artistic quality.",
  },
  {
    id: 6,
    name: "Grok-1",
    provider: "xAI",
    website: "https://x.ai",
    keywords: ["Large Language Model", "Conversational", "Real-time"],
    description: "A conversational AI model designed to answer questions with a bit of wit and personality.",
  },
]

export default function AISolutionsList() {
  const [sortField, setSortField] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [viewType, setViewType] = useState("grid")

  // Sort the AI solutions based on the current sort field and order
  const sortedSolutions = [...AI_SOLUTIONS].sort((a, b) => {
    const fieldA = a[sortField].toLowerCase()
    const fieldB = b[sortField].toLowerCase()

    if (sortOrder === "asc") {
      return fieldA.localeCompare(fieldB)
    } else {
      return fieldB.localeCompare(fieldA)
    }
  })

  return (
    <div>
      <Tabs defaultValue="grid" className="mb-6">
        <TabsList>
          <TabsTrigger value="grid" onClick={() => setViewType("grid")}>
            Grid View
          </TabsTrigger>
          <TabsTrigger value="table" onClick={() => setViewType("table")}>
            Table View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSolutions.map((solution) => (
              <Card key={solution.id} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{solution.name}</span>
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {solution.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {solution.keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <a
                    href={solution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table" className="mt-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Keywords</TableHead>
                  <TableHead>Website</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedSolutions.map((solution) => (
                  <TableRow key={solution.id}>
                    <TableCell className="font-medium">{solution.name}</TableCell>
                    <TableCell>{solution.provider}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {solution.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="mr-1">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <a
                        href={solution.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Visit
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
