import { Users, Target, Heart, TrendingUp, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function About() {
  const principles = [
    {
      icon: Target,
      title: "The 3.5% Rule",
      description: "Research by Erica Chenoweth shows that when 3.5% of a population actively participates in sustained nonviolent resistance, transformative social change becomes inevitable."
    },
    {
      icon: Users,
      title: "Collective Impact",
      description: "Individual actions amplify when coordinated. Every signature, donation, and protest creates momentum toward meaningful change for Palestinian rights."
    },
    {
      icon: Heart,
      title: "Sustained Solidarity",
      description: "Real change requires consistent, long-term commitment. We help you maintain engagement across multiple forms of peaceful activism."
    },
    {
      icon: TrendingUp,
      title: "Measurable Progress",
      description: "Track your personal journey and see how collective efforts are building toward the critical mass needed for policy change."
    }
  ]

  const impactStats = [
    { number: "3.5%", label: "Critical mass for social change", source: "Harvard Research" },
    { number: "142,847", label: "Active UK participants", source: "Current tracker" },
    { number: "67M", label: "UK population", source: "ONS 2023" },
    { number: "2.3M", label: "Participants needed", source: "Target calculation" }
  ]

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Why <span className="bg-gradient-hero bg-clip-text text-transparent">3.5%</span> Matters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Understanding the science behind successful social movements and how sustained solidarity can create lasting change for Palestine.
          </p>
        </div>

        {/* The 3.5% Theory Section */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-elegant animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center">
              <Globe className="h-8 w-8 mr-3 text-primary" />
              The 3.5% Theory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Harvard political scientist Erica Chenoweth's groundbreaking research analyzed over 300 social movements from 1900-2006. 
                Her findings revealed a striking pattern: <strong className="text-foreground">no nonviolent campaign failed once it achieved the sustained participation of 3.5% of the population</strong>.
              </p>
              <p>
                This isn't just about numbers – it's about sustained, coordinated action across multiple channels. When 3.5% of people actively participate in boycotts, protests, petitions, and other forms of resistance, it creates unstoppable momentum for change.
              </p>
              <p className="text-primary font-semibold">
                For the UK, with a population of 67 million, we need approximately 2.3 million active participants to reach this critical threshold.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={stat.label} className="text-center shadow-elegant animate-fade-in hover:shadow-glow transition-all duration-300" 
                  style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.source}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={principle.title} className="shadow-elegant animate-fade-in hover:shadow-glow transition-all duration-300" 
                    style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <principle.icon className="h-6 w-6 text-primary mr-3" />
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Palestine Section */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center">
              <Heart className="h-8 w-8 mr-3 text-secondary" />
              Why Palestine, Why Now
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                The Palestinian struggle for freedom, dignity, and self-determination represents one of the most prolonged injustices in modern history. 
                For over 75 years, Palestinians have faced displacement, occupation, and systematic denial of their basic human rights.
              </p>
              <p>
                <strong className="text-foreground">International law is clear</strong>: the occupation of Palestinian territories is illegal, 
                settlement expansion violates the Fourth Geneva Convention, and the blockade of Gaza constitutes collective punishment.
              </p>
              <p>
                Yet despite decades of diplomatic efforts, the situation has only worsened. This is where the power of sustained citizen action becomes crucial. 
                When enough people consistently demand justice through peaceful means, governments are forced to listen and act.
              </p>
              <div className="bg-accent p-6 rounded-lg border-l-4 border-primary">
                <p className="font-semibold text-foreground mb-2">Our approach is grounded in:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nonviolent resistance and peaceful advocacy</li>
                  <li>• International law and human rights principles</li>
                  <li>• Solidarity with Palestinian civil society calls for action</li>
                  <li>• Evidence-based strategies for social change</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="max-w-4xl mx-auto shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center">
              <Lightbulb className="h-8 w-8 mr-3 text-primary" />
              Your Role in History
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                History shows us that ordinary people, when they act together with persistence and courage, can achieve extraordinary things. 
                The civil rights movement, the anti-apartheid struggle, women's suffrage – all succeeded because enough people refused to accept injustice.
              </p>
              <p className="text-foreground font-semibold">
                Palestine's freedom will come the same way: through sustained, coordinated action by people like you.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-foreground font-medium">
                Ready to be part of the solution?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tracker">
                  <Button size="lg" className="bg-gradient-primary">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/directory">
                  <Button size="lg" variant="outline">
                    Explore Actions
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}