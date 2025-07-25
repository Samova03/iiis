"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, FileText, ClipboardCheck, BarChart3, BookOpen } from "lucide-react"
import AddStudentForm from "@/components/add-student-form"
import AddGradesPage from "@/components/add-grades-page"
import ReviewRequestsPage from "@/components/review-requests-page"
import ViewResultsPage from "@/components/view-results-page"
import ViewStudentsPage from "@/components/view-students-page"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const menuItems = [
    { id: "add-student", title: "إضافة طالب", icon: UserPlus },
    { id: "add-grades", title: "إضافة الدرجات", icon: FileText },
    { id: "review-requests", title: "طلبات المراجعة", icon: ClipboardCheck },
    { id: "view-results", title: "استعراض النتائج", icon: BarChart3 },
    { id: "view-students", title: "عرض الطلاب", icon: Users },
  ]

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "add-student":
        return <AddStudentForm onBack={() => setCurrentPage("dashboard")} />
      case "add-grades":
        return <AddGradesPage onBack={() => setCurrentPage("dashboard")} />
      case "review-requests":
        return <ReviewRequestsPage onBack={() => setCurrentPage("dashboard")} />
      case "view-results":
        return <ViewResultsPage onBack={() => setCurrentPage("dashboard")} />
      case "view-students":
        return <ViewStudentsPage onBack={() => setCurrentPage("dashboard")} />
      default:
        return (
          <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-amber-600 text-white p-4">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8" />
                  <h1 className="text-xl font-bold">نظام إدارة الطلاب</h1>
                </div>
                <div className="text-sm">المعهد المتوسط للدراسات الإسلامية - عثمان بن عفان</div>
              </div>
            </div>

            {/* Main Dashboard */}
            <div className="max-w-7xl mx-auto p-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">لوحة التحكم الرئيسية</h2>
                <p className="text-gray-600">إدارة شؤون الطلاب والدرجات</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card
                      key={item.id}
                      className="hover:shadow-lg transition-shadow cursor-pointer border-r-4 border-r-amber-500"
                      onClick={() => setCurrentPage(item.id)}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <Icon className="w-6 h-6 text-amber-600" />
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={() => setCurrentPage(item.id)}
                        >
                          الدخول
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">245</div>
                    <div className="text-sm text-blue-800">إجمالي الطلاب</div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-green-800">طلاب جدد هذا الشهر</div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">8</div>
                    <div className="text-sm text-yellow-800">طلبات مراجعة معلقة</div>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-purple-800">معدل النجاح</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )
    }
  }

  return renderCurrentPage()
}
