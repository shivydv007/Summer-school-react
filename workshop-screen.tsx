"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Calendar,
  User,
  Mail,
  Lock,
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  Bell,
  ChevronRight,
  Play,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Menu,
  X,
  Home,
  Settings,
  LogOut,
} from "lucide-react"

export default function WorkshopScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [notifications, setNotifications] = useState(3)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Simulate progress animation
  useEffect(() => {
    if (isLoggedIn && progress < 65) {
      const timer = setTimeout(() => setProgress((prev) => Math.min(prev + 1, 65)), 50)
      return () => clearTimeout(timer)
    }
  }, [progress, isLoggedIn])

  // Animate entrance
  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const handleLogin = async () => {
    setIsLoading(true)
    setLoginError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (email && password) {
      setIsLoggedIn(true)
      setProgress(0) // Reset progress for animation
    } else {
      setLoginError("Please fill in all fields")
    }
    setIsLoading(false)
  }

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Advanced React Patterns",
      speaker: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      time: "2:00 PM - 4:00 PM",
      participants: 45,
      maxParticipants: 50,
      difficulty: "Advanced",
      duration: "2 hours",
      rating: 4.8,
      status: "upcoming",
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      speaker: "Mike Chen",
      date: "Dec 20, 2024",
      time: "10:00 AM - 12:00 PM",
      participants: 32,
      maxParticipants: 40,
      difficulty: "Beginner",
      duration: "2 hours",
      rating: 4.9,
      status: "upcoming",
    },
  ]

  const completedWorkshops = [
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      speaker: "Alex Rodriguez",
      completedDate: "Nov 28, 2024",
      rating: 4.7,
      certificate: true,
      status: "completed",
    },
    {
      id: 4,
      title: "Database Design Principles",
      speaker: "Dr. Emily Watson",
      completedDate: "Nov 15, 2024",
      rating: 4.6,
      certificate: true,
      status: "completed",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{
        background: "linear-gradient(135deg, #16161D 0%, #636383 100%)",
      }}
    >
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 md:hidden">
        <div className="flex items-center justify-between p-4">
          <h1
            className="text-2xl font-bold"
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WORKSHOPS
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-xs flex items-center justify-center">
                  {notifications}
                </Badge>
              )}
            </Button>
            {isLoggedIn && (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-gray-900 border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <nav className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                      <Home className="w-4 h-4 mr-3" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                      <BookOpen className="w-4 h-4 mr-3" />
                      My Workshops
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                      <Award className="w-4 h-4 mr-3" />
                      Certificates
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-400 hover:bg-red-400/10"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block relative text-center py-8 lg:py-12">
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-xs flex items-center justify-center">
                {notifications}
              </Badge>
            )}
          </Button>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-pulse"
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WORKSHOPS
        </h1>
        <p
          className="text-base md:text-lg text-white/90 animate-fade-in px-4"
          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
        >
          Join our lead workshops to enhance your skills
        </p>

        {/* Quick Stats */}
        <div className="flex justify-center gap-4 md:gap-8 mt-6 md:mt-8 px-4">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">150+</div>
            <div className="text-xs md:text-sm text-white/70">Students</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">25+</div>
            <div className="text-xs md:text-sm text-white/70">Workshops</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">4.8★</div>
            <div className="text-xs md:text-sm text-white/70">Rating</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
            {!isLoggedIn ? (
              /* Enhanced Workshop Preview */
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-black/30 h-auto">
                  <TabsTrigger
                    value="overview"
                    className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="upcoming"
                    className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                  >
                    Features
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 md:space-y-6">
                  <Card className="bg-black/50 border-gray-700 hover:bg-black/60 transition-all duration-300">
                    <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                      <div className="mb-4 md:mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                          <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                        Welcome to Our Workshop Platform
                      </h3>
                      <p
                        className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed"
                        style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                      >
                        Discover expert-led workshops designed to accelerate your learning journey. Join thousands of
                        students who have transformed their skills through our interactive sessions.
                      </p>
                      <Button
                        className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                        onClick={() => document.getElementById("login-section")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Get Started <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="upcoming" className="space-y-3 md:space-y-4">
                  {upcomingWorkshops.map((workshop, index) => (
                    <Card
                      key={workshop.id}
                      className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 space-y-2 md:space-y-0">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold text-base md:text-lg mb-2">{workshop.title}</h3>
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                              <User className="w-4 h-4 flex-shrink-0" />
                              <span className="text-sm">{workshop.speaker}</span>
                            </div>
                          </div>
                          <Badge
                            variant={workshop.difficulty === "Beginner" ? "secondary" : "destructive"}
                            className="animate-pulse self-start md:self-auto"
                          >
                            {workshop.difficulty}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{workshop.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{workshop.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Users className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">
                              {workshop.participants}/{workshop.maxParticipants}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                            <span className="text-sm">{workshop.rating}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Seats Available</span>
                            <span>{workshop.maxParticipants - workshop.participants} left</span>
                          </div>
                          <Progress value={(workshop.participants / workshop.maxParticipants) * 100} className="h-2" />
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-sm md:text-base"
                          disabled
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Login to Register
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="features" className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: User, title: "Expert Instructors", desc: "Learn from industry professionals" },
                      { icon: Play, title: "Interactive Sessions", desc: "Hands-on learning experience" },
                      { icon: Award, title: "Certificates", desc: "Earn recognized certifications" },
                      { icon: Mail, title: "Email Support", desc: "Direct access links via email" },
                    ].map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105"
                      >
                        <CardContent className="p-4 md:p-6 text-center">
                          <feature.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-blue-400" />
                          <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{feature.title}</h3>
                          <p className="text-gray-400 text-xs md:text-sm">{feature.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              /* Enhanced Student Dashboard Content */
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white">My Learning Journey</h2>
                  <Badge className="bg-green-600 self-start sm:self-auto">Active Student</Badge>
                </div>

                <Tabs defaultValue="dashboard" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-black/30 h-auto">
                    <TabsTrigger
                      value="dashboard"
                      className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                    >
                      Dashboard
                    </TabsTrigger>
                    <TabsTrigger
                      value="upcoming"
                      className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                    >
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger
                      value="completed"
                      className="text-white data-[state=active]:bg-white/20 text-xs md:text-sm py-2 md:py-3"
                    >
                      Completed
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="dashboard" className="space-y-4 md:space-y-6">
                    {/* Progress Overview */}
                    <Card className="bg-white/10 border-gray-700">
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-white font-semibold mb-4 text-base md:text-lg">Learning Progress</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                              <span>Overall Progress</span>
                              <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2 md:h-3" />
                          </div>
                          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                            <div>
                              <div className="text-xl md:text-2xl font-bold text-green-400">5</div>
                              <div className="text-xs text-gray-400">Completed</div>
                            </div>
                            <div>
                              <div className="text-xl md:text-2xl font-bold text-blue-400">2</div>
                              <div className="text-xs text-gray-400">In Progress</div>
                            </div>
                            <div>
                              <div className="text-xl md:text-2xl font-bold text-yellow-400">3</div>
                              <div className="text-xs text-gray-400">Certificates</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <Button className="h-14 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <div className="text-center">
                          <BookOpen className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                          <div className="text-xs md:text-sm">Browse Workshops</div>
                        </div>
                      </Button>
                      <Button className="h-14 md:h-16 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                        <div className="text-center">
                          <Award className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                          <div className="text-xs md:text-sm">View Certificates</div>
                        </div>
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="upcoming" className="space-y-3 md:space-y-4">
                    {upcomingWorkshops.map((workshop) => (
                      <Card key={workshop.id} className="bg-gray-900/50 border-gray-700">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                            <div>
                              <h3 className="text-white font-semibold text-base md:text-lg">{workshop.title}</h3>
                              <p className="text-gray-400 text-sm">{workshop.speaker}</p>
                            </div>
                            <Badge className="bg-green-600 self-start sm:self-auto">Registered</Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-300 mb-4">
                            <span>{workshop.date}</span>
                            <span>{workshop.time}</span>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base">
                            <Mail className="w-4 h-4 mr-2" />
                            Workshop Link Sent to Email
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="completed" className="space-y-3 md:space-y-4">
                    {completedWorkshops.map((workshop) => (
                      <Card key={workshop.id} className="bg-gray-900/50 border-gray-700">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                            <div>
                              <h3 className="text-white font-semibold text-base md:text-lg">{workshop.title}</h3>
                              <p className="text-gray-400 text-sm">{workshop.speaker}</p>
                            </div>
                            <div className="flex items-center gap-2 self-start sm:self-auto">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              {workshop.certificate && <Award className="w-5 h-5 text-yellow-400" />}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-300">{workshop.rating}</span>
                            </div>
                            <span className="text-sm text-gray-400">{workshop.completedDate}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6" id="login-section">
            {!isLoggedIn ? (
              /* Enhanced Login Box */
              <Card
                className="border-0 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: "linear-gradient(45deg, #3B82F6 0%, #10B981 50%, #EF4444 50%, #F59E0B 100%)",
                  padding: "2px",
                }}
              >
                <div className="bg-gray-900 rounded-lg p-4 md:p-6 lg:p-8">
                  <h3
                    className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                  >
                    Login to Access Workshops
                  </h3>

                  {loginError && (
                    <div className="flex items-center gap-2 text-red-400 text-sm mb-4 p-3 bg-red-400/10 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setLoginError("")
                        }}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-blue-500 transition-colors text-sm md:text-base"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setLoginError("")
                        }}
                        className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white focus:border-blue-500 transition-colors text-sm md:text-base"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-8 w-8 text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <Button
                      onClick={handleLogin}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 text-sm md:text-base h-10 md:h-11"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Logging in...
                        </div>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>

                  <div className="mt-4 md:mt-6 text-center">
                    <p className="text-gray-400 text-xs md:text-sm mb-2">Demo Credentials:</p>
                    <p className="text-gray-300 text-xs">Email: demo@example.com</p>
                    <p className="text-gray-300 text-xs">Password: demo123</p>
                  </div>
                </div>
              </Card>
            ) : (
              /* Enhanced Student Dashboard Sidebar */
              <div
                className="rounded-lg p-4 md:p-6 transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #809CB8 0%, #D2D6E6 100%)",
                }}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3
                    className="text-gray-800 text-lg md:text-xl font-semibold"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                  >
                    Student Dashboard
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLoggedIn(false)}
                    className="text-gray-600 hover:text-gray-800 hidden md:flex"
                  >
                    Logout
                  </Button>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4
                    className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                  >
                    Your Progress
                  </h4>

                  {/* Enhanced Progress Card */}
                  <Card
                    className="bg-white/90 border-0 transform hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto lg:mx-0"
                    style={{ height: "129px" }}
                  >
                    <CardContent className="p-3 md:p-4 h-full flex flex-col justify-between">
                      <div>
                        <h5
                          className="text-gray-800 font-medium mb-2 text-sm md:text-base"
                          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                        >
                          Overall Progress
                        </h5>
                        <Progress value={progress} className="mb-2 h-2" />
                        <p
                          className="text-xs md:text-sm text-gray-600"
                          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                        >
                          {progress}% Complete
                        </p>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>5 Completed</span>
                        <span style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>2 Remaining</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <Card className="bg-white/90 border-0 transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-3 md:p-4 text-center">
                      <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">5</div>
                      <p
                        className="text-xs md:text-sm text-gray-600"
                        style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                      >
                        Workshops Attended
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/90 border-0 transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-3 md:p-4 text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">3</div>
                      <p
                        className="text-xs md:text-sm text-gray-600"
                        style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                      >
                        Certificates Earned
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div>
                  <h4 className="text-gray-700 mb-3 font-medium text-sm md:text-base">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 p-2 bg-white/50 rounded">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Completed React Workshop</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 p-2 bg-white/50 rounded">
                      <Award className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                      <span>Earned JavaScript Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Workshop Features */}
            <Card className="bg-gray-900/50 border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <h4
                  className="text-white font-medium mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base"
                  style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                >
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  Why Choose Our Workshops?
                </h4>
                <ul className="space-y-2 md:space-y-3 text-gray-300">
                  {[
                    { icon: "🎯", text: "Expert speakers from top companies" },
                    { icon: "🚀", text: "Interactive hands-on sessions" },
                    { icon: "🏆", text: "Industry-recognized certificates" },
                    { icon: "📧", text: "Instant email access links" },
                    { icon: "💬", text: "Live Q&A with instructors" },
                    { icon: "📱", text: "Mobile-friendly platform" },
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                    >
                      <span className="text-base md:text-lg flex-shrink-0">{feature.icon}</span>
                      <span className="text-xs md:text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
