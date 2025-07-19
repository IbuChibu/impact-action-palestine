import { CheckCircle2, Circle, Trophy, Star, Medal, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export default function ActionTracker() {
  // Mock user data - this would come from your backend/auth
  const userLevel = "silver" // bronze, silver, gold, platinum
  const userProgress = {
    petitions: { completed: 3, target: 5 },
    protests: { completed: 1, target: 2 },
    donations: { completed: 2, target: 3 },
    boycotts: { completed: 4, target: 5 }
  }

  const totalActions = Object.values(userProgress).reduce((sum, item) => sum + item.completed, 0)
  const totalTargets = Object.values(userProgress).reduce((sum, item) => sum + item.target, 0)
  const overallProgress = (totalActions / totalTargets) * 100

  const levelInfo = {
    bronze: { icon: Medal, color: "text-amber-600", name: "Bronze Advocate", minActions: 0 },
    silver: { icon: Star, color: "text-slate-400", name: "Silver Activist", minActions: 5 },
    gold: { icon: Trophy, color: "text-yellow-500", name: "Gold Champion", minActions: 10 },
    platinum: { icon: Crown, color: "text-purple-500", name: "Platinum Leader", minActions: 15 }
  }

  const currentLevelInfo = levelInfo[userLevel as keyof typeof levelInfo]
  const LevelIcon = currentLevelInfo.icon

  const actionItems = [
    {
      title: "Sign Petitions",
      description: "Add your voice to important causes",
      completed: userProgress.petitions.completed,
      target: userProgress.petitions.target,
      suggestions: [
        "Stop arms sales to Israel",
        "Call for immediate ceasefire",
        "Support ICC investigation"
      ],
      link: "/directory?filter=petitions"
    },
    {
      title: "Attend Protests",
      description: "Join peaceful demonstrations",
      completed: userProgress.protests.completed,
      target: userProgress.protests.target,
      suggestions: [
        "Weekly solidarity marches",
        "Local community gatherings",
        "University campus events"
      ],
      link: "/directory?filter=protests"
    },
    {
      title: "Support Fundraisers",
      description: "Contribute to humanitarian efforts",
      completed: userProgress.donations.completed,
      target: userProgress.donations.target,
      suggestions: [
        "Gaza emergency relief",
        "Medical aid campaigns",
        "Palestinian families support"
      ],
      link: "/directory?filter=fundraisers"
    },
    {
      title: "Participate in Boycotts",
      description: "Make conscious consumer choices",
      completed: userProgress.boycotts.completed,
      target: userProgress.boycotts.target,
      suggestions: [
        "Switch to ethical brands",
        "Support Palestinian businesses",
        "Avoid complicit companies"
      ],
      link: "/directory?filter=boycotts"
    }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Your Action Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your impact and discover new ways to support Palestine
          </p>
        </div>

        {/* Level & Progress Overview */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-elegant">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <LevelIcon className={`h-12 w-12 ${currentLevelInfo.color} mr-3`} />
              <div>
                <CardTitle className="text-2xl">{currentLevelInfo.name}</CardTitle>
                <Badge variant="secondary" className="mt-1">
                  {totalActions} / {totalTargets} Actions Completed
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Overall Progress</span>
                <span className="text-2xl font-bold text-primary">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-center text-muted-foreground">
                Complete more actions to unlock the next level and increase your impact!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {actionItems.map((item, index) => {
            const isCompleted = item.completed >= item.target
            const progressPercentage = (item.completed / item.target) * 100

            return (
              <Card key={item.title} className="hover:shadow-glow transition-all duration-300 animate-fade-in" 
                    style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6 text-primary mr-2" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground mr-2" />
                      )}
                      {item.title}
                    </CardTitle>
                    <Badge variant={isCompleted ? "default" : "secondary"}>
                      {item.completed}/{item.target}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={progressPercentage} className="h-2" />
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Suggested Actions:</h4>
                    <ul className="space-y-1">
                      {item.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Circle className="h-3 w-3 mr-2 flex-shrink-0" />
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={item.link}>
                    <Button 
                      variant={isCompleted ? "outline" : "default"} 
                      className="w-full mt-4"
                    >
                      {isCompleted ? "Explore More" : "Take Action"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievement Section */}
        <Card className="max-w-4xl mx-auto mt-8 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center">Level Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(levelInfo).map(([level, info]) => {
                const Icon = info.icon
                const isCurrentLevel = level === userLevel
                const isUnlocked = totalActions >= info.minActions
                
                return (
                  <div key={level} className={`text-center p-4 rounded-lg border ${
                    isCurrentLevel ? 'border-primary bg-accent' : 
                    isUnlocked ? 'border-muted' : 'border-muted opacity-50'
                  }`}>
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${info.color}`} />
                    <h4 className="font-medium text-sm">{info.name}</h4>
                    <p className="text-xs text-muted-foreground">{info.minActions}+ actions</p>
                    {isCurrentLevel && (
                      <Badge variant="default" className="mt-1 text-xs">Current</Badge>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}