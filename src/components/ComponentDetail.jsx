import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export function ComponentDetail({ 
  name, 
  description, 
  variants = [], 
  examples = [], 
  codeExample = '',
  usage = '',
  props = []
}) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExample)
      setCopied(true)
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <TypographyH1>{name}</TypographyH1>
        <TypographyP className="text-muted-foreground">{description}</TypographyP>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          {props.length > 0 && <TabsTrigger value="props">Props</TabsTrigger>}
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          {variants.length > 0 && (
            <div className="space-y-4">
              <TypographyH2>Variants</TypographyH2>
              <div className="grid gap-4">
                {variants.map((variant, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{variant.name}</CardTitle>
                      <CardDescription>{variant.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {variant.example}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {examples.length > 0 && (
            <div className="space-y-4">
              <TypographyH2>Examples</TypographyH2>
              <div className="grid gap-4">
                {examples.map((example, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{example.title}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {example.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 z-20"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <ScrollArea className="h-[400px] rounded-md border p-4">
                  <pre className="text-sm">
                    <code>{codeExample}</code>
                  </pre>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Usage Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                {usage}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {props.length > 0 && (
          <TabsContent value="props">
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">Default</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.map((prop) => (
                        <tr key={prop.name}>
                          <td className="px-4 py-2 font-medium">{prop.name}</td>
                          <td className="px-4 py-2">{prop.type}</td>
                          <td className="px-4 py-2">{prop.default}</td>
                          <td className="px-4 py-2">{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
} 