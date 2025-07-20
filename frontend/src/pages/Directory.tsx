import { useState, useEffect } from "react"
import { Search, Filter, MapPin, Calendar, Users, DollarSign, ShoppingBag, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data - this would come from your backend/API
  const petitions = [
    {
      id: 1,
      title: "Stop UK Arms Sales to Israel",
      description: "Demand the UK government immediately cease all arms exports to Israel",
      signatures: 127543,
      target: 150000,
      organization: "Campaign Against Arms Trade",
      urgent: true,
      link: "#"
    },
    {
      id: 2,
      title: "Immediate Ceasefire in Gaza",
      description: "Call for an immediate and permanent ceasefire in Gaza",
      signatures: 89234,
      target: 100000,
      organization: "Stop the War Coalition",
      urgent: true,
      link: "#"
    },
    {
      id: 3,
      title: "Support ICC Investigation",
      description: "Back the International Criminal Court's investigation into war crimes",
      signatures: 45672,
      target: 75000,
      organization: "Human Rights Watch",
      urgent: false,
      link: "#"
    }
  ]

  const protests = [
    {
      id: 1,
      title: "National March for Palestine",
      description: "Join thousands in central London for a peaceful demonstration",
      date: "2024-01-20",
      location: "London, UK",
      expectedAttendees: 50000,
      organizer: "Palestine Solidarity Campaign",
      verified: true
    },
    {
      id: 2,
      title: "Manchester Solidarity Rally",
      description: "Local community gathering in support of Palestinian rights",
      date: "2024-01-22",
      location: "Manchester, UK",
      expectedAttendees: 2500,
      organizer: "Manchester PSC",
      verified: true
    },
    {
      id: 3,
      title: "Edinburgh Campus Demo",
      description: "Student-led demonstration at University of Edinburgh",
      date: "2024-01-25",
      location: "Edinburgh, UK",
      expectedAttendees: 800,
      organizer: "Edinburgh Student Union",
      verified: false
    }
  ]

  const fundraisers = [
    {
      id: 1,
      title: "Gaza Emergency Medical Relief",
      description: "Urgent medical supplies and equipment for Gaza hospitals",
      raised: 234567,
      target: 500000,
      organization: "Medical Aid for Palestinians",
      verified: true,
      currency: "GBP"
    },
    {
      id: 2,
      title: "Palestinian Children's Education Fund",
      description: "Supporting education for displaced Palestinian children",
      raised: 89432,
      target: 200000,
      organization: "Save the Children",
      verified: true,
      currency: "GBP"
    },
    {
      id: 3,
      title: "Family Emergency Support",
      description: "Direct aid to Palestinian families in need",
      raised: 156789,
      target: 300000,
      organization: "Islamic Relief",
      verified: true,
      currency: "GBP"
    }
  ]

  const boycotts = [
    {
      id: 1,
      title: "Tech Companies Supporting Occupation",
      description: "Boycott major tech companies complicit in the occupation",
      alternatives: ["Signal instead of WhatsApp", "Firefox instead of Chrome", "DuckDuckGo instead of Google"],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Consumer Goods Boycott",
      description: "Avoid major consumer brands with ties to Israel",
      alternatives: ["Local brands", "Ethical alternatives", "Palestinian products"],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Financial Institutions",
      description: "Switch from banks investing in Israeli settlements",
      alternatives: ["Ethical banks", "Credit unions", "Islamic banking"],
      impact: "High",
      difficulty: "Hard"
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Action Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover verified ways to support Palestine and make your voice heard
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search actions, organizations, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="manchester">Manchester</SelectItem>
                  <SelectItem value="birmingham">Birmingham</SelectItem>
                  <SelectItem value="glasgow">Glasgow</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="urgent">Urgent Actions</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
                  <SelectItem value="local">Local Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different action types */}
        <Tabs defaultValue="petitions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="petitions" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Petitions
            </TabsTrigger>
            <TabsTrigger value="protests" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Protests
            </TabsTrigger>
            <TabsTrigger value="fundraisers" className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Fundraisers
            </TabsTrigger>
            <TabsTrigger value="boycotts" className="flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Boycotts
            </TabsTrigger>
          </TabsList>

          {/* Petitions Tab */}
          <TabsContent value="petitions" className="space-y-4">
            {petitions.map((petition) => (
              <Card key={petition.id} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{petition.title}</CardTitle>
                        {petition.urgent && (
                          <Badge variant="destructive">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{petition.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        by {petition.organization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>{petition.signatures.toLocaleString()} signatures</span>
                      <span>{petition.target.toLocaleString()} target</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(petition.signatures / petition.target) * 100}%` }}
                      />
                    </div>
                    <Button className="w-full" variant="default">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Sign Petition
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Protests Tab */}
          <TabsContent value="protests" className="space-y-4">
            {protests.map((protest) => (
              <Card key={protest.id} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{protest.title}</CardTitle>
                        {protest.verified && (
                          <Badge variant="default">Verified</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{protest.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Organized by {protest.organizer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(protest.date)}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {protest.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {protest.expectedAttendees.toLocaleString()} expected
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="default">
                        Join Event
                      </Button>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Fundraisers Tab */}
          <TabsContent value="fundraisers" className="space-y-4">
            {fundraisers.map((fundraiser) => (
              <Card key={fundraiser.id} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{fundraiser.title}</CardTitle>
                        {fundraiser.verified && (
                          <Badge variant="default">Verified</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{fundraiser.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        by {fundraiser.organization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>{formatCurrency(fundraiser.raised)} raised</span>
                      <span>{formatCurrency(fundraiser.target)} target</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(fundraiser.raised / fundraiser.target) * 100}%` }}
                      />
                    </div>
                    <Button className="w-full bg-gradient-primary">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Boycotts Tab */}
          <TabsContent value="boycotts" className="space-y-4">
            {boycotts.map((boycott) => (
              <Card key={boycott.id} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{boycott.title}</CardTitle>
                  <p className="text-muted-foreground">{boycott.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Impact Level</h4>
                        <Badge variant={boycott.impact === "High" ? "default" : "secondary"}>
                          {boycott.impact}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Difficulty</h4>
                        <Badge variant="outline">{boycott.difficulty}</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Alternative Options:</h4>
                      <ul className="space-y-1">
                        {boycott.alternatives.map((alt, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {alt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}