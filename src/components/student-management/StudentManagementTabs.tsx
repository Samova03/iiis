"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, FileText, ClipboardCheck, BarChart3 } from "lucide-react"
import AddStudentForm from "./AddStudentForm"
import AddGradesForm from "./AddGradesForm"
import ReviewRequestsTable from "./ReviewRequestsTable"
import ResultsView from "./ResultsView"

export default function StudentManagementTabs() {
  return (
    <div className="w-full" dir="rtl">
      <Tabs defaultValue="add-student" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="add-student" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            إضافة طالب
          </TabsTrigger>
          <TabsTrigger value="add-grades" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            إضافة الدرجات
          </TabsTrigger>
          <TabsTrigger value="review-requests" className="flex items-center gap-2">
            <ClipboardCheck className="w-4 h-4" />
            طلبات المراجعة
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            استعراض النتائج
          </TabsTrigger>
        </TabsList>

        <TabsContent value="add-student">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                إضافة طالب جديد
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AddStudentForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-grades">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                إضافة الدرجات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AddGradesForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review-requests">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5" />
                طلبات المراجعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReviewRequestsTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                استعراض النتائج
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResultsView />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
