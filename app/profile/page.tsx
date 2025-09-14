"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Sprout, Calendar, Edit, Save } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    mobile: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    farmName: "Kumar Organic Farm",
    location: "Haryana, India",
    farmSize: "5.2",
    soilType: "Loamy",
    irrigationType: "Drip Irrigation",
    experience: "15",
    specialization: "Organic Farming",
    joinDate: "January 2023",
  })

  const farmStats = [
    { label: "Total Recommendations", value: "24", icon: Sprout },
    { label: "Successful Harvests", value: "18", icon: Calendar },
    { label: "Farm Rating", value: "4.8/5", icon: User },
    { label: "Years Experience", value: profile.experience, icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farm Profile</h1>
            <p className="text-muted-foreground mt-2">Manage your farm information and preferences</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2">
            {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      value={profile.mobile}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5" />
                  Farm Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="farmName">Farm Name</Label>
                    <Input
                      id="farmName"
                      value={profile.farmName}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, farmName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="farmSize">Farm Size (Acres)</Label>
                    <Input
                      id="farmSize"
                      value={profile.farmSize}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, farmSize: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select disabled={!isEditing}>
                      <SelectTrigger>
                        <SelectValue placeholder={profile.soilType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="silt">Silt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="irrigation">Irrigation Type</Label>
                    <Select disabled={!isEditing}>
                      <SelectTrigger>
                        <SelectValue placeholder={profile.irrigationType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drip">Drip Irrigation</SelectItem>
                        <SelectItem value="sprinkler">Sprinkler</SelectItem>
                        <SelectItem value="flood">Flood Irrigation</SelectItem>
                        <SelectItem value="rainfed">Rain-fed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Textarea
                    id="specialization"
                    value={profile.specialization}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, specialization: e.target.value })}
                    placeholder="Describe your farming specialization..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Achievements */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Farm Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {farmStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{stat.label}</span>
                        </div>
                        <Badge variant="secondary">{stat.value}</Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="w-full justify-center py-2 bg-green-100 text-green-800">🏆 Organic Certified</Badge>
                  <Badge className="w-full justify-center py-2 bg-blue-100 text-blue-800">🌱 Sustainable Farmer</Badge>
                  <Badge className="w-full justify-center py-2 bg-yellow-100 text-yellow-800">⭐ Top Performer</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Member since: {profile.joinDate}</p>
                  <p>Profile completion: 95%</p>
                  <p>Last updated: Today</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
