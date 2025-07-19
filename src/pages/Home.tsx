import { ArrowRight, Users, FileText, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router-dom"

export default function Home() {
  // Mock data - this would come from your backend
  const participationGoal = 3.5 // 3.5% goal
  const currentParticipants = 142847 // Current participants
  const ukPopulation = 67000000 // Approximate UK population
  const currentPercentage = (currentParticipants / ukPopulation) * 100
  const progressPercentage = (currentPercentage / participationGoal) * 100

  const actionCards = [
    {
      title: "Join a Protest",
      description: "Find and join peaceful demonstrations in your area",
      icon: Users,
      color: "bg-gradient-primary",
      link: "/directory?filter=protests"
    },
    {
      title: "Sign a Petition",
      description: "Add your voice to important causes and campaigns",
      icon: FileText,
      color: "bg-gradient-hero",
      link: "/directory?filter=petitions"
    },
    {
      title: "Support a Fundraiser",
      description: "Contribute to verified humanitarian efforts",
      icon: Heart,
      color: "bg-secondary",
      link: "/directory?filter=fundraisers"
    },
    {
      title: "Boycott Effectively",
      description: "Make informed choices about where you spend your money",
      icon: ShoppingCart,
      color: "bg-primary",
      link: "/directory?filter=boycotts"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Turn Solidarity into <span className="bg-gradient-hero bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Join the movement that's making a real difference. Take meaningful action for Palestine with our guided platform.
          </p>

          {/* Live Tracker */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-elegant animate-scale-in">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">UK Participation Goal</h3>
                  <span className="text-2xl font-bold text-primary">{participationGoal}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentParticipants.toLocaleString()} active participants</span>
                  <span>{currentPercentage.toFixed(2)}% of UK population</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Research shows that sustained participation by 3.5% of the population can create transformative social change.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {actionCards.map((card, index) => (
              <Link key={card.title} to={card.link}>
                <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in h-full" 
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center mb-4 group-hover:animate-glow transition-all`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium mr-2">Take Action</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <Link to="/tracker">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}