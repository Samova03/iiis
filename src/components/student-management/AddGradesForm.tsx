"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AddGradesForm() {
  const [students, setStudents] = useState([])
  const [selectedClass, setSelectedClass] = useState("")
  const [grades, setGrades] = useState({})

  useEffect(() => {
    // جلب قائمة الطلاب
    fetchStudents()
  }, [selectedClass])

  const fetchStudents = async () => {
    try {
      const response = await fetch(`/api/students${selectedClass ? `?classId=${selectedClass}` : ""}`)
      const data = await response.json()
      setStudents(data)
    } catch (error) {
      console.error("خطأ في جلب الطلاب:", error)
    }
  }

  const handleGradeChange = (studentId: string, field: string, value: string) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: Number.parseFloat(value) || 0,
      },
    }))
  }

  const calculateTotal = (studentId: string) => {
    const studentGrades = grades[studentId] || {}
    return (studentGrades.coursework || 0) + (studentGrades.final || 0)
  }

  const getGrade = (total: number) => {
    if (total >= 90) return "امتياز"
    if (total >= 80) return "جيد جداً"
    if (total >= 70) return "جيد"
    if (total >= 60) return "مقبول"
    return "راسب"
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>الصف</Label>
          <Select onValueChange={setSelectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="اختر الصف" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1A">الصف الأول أ</SelectItem>
              <SelectItem value="1B">الصف الأول ب</SelectItem>
              <SelectItem value="2A">الصف الثاني أ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>المادة</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="اختر المادة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">الرياضيات</SelectItem>
              <SelectItem value="arabic">اللغة العربية</SelectItem>
              <SelectItem value="science">العلوم</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">اسم الطالب</TableHead>
            <TableHead className="text-right">أعمال السنة (30)</TableHead>
            <TableHead className="text-right">الامتحان النهائي (70)</TableHead>
            <TableHead className="text-right">المجموع</TableHead>
            <TableHead className="text-right">التقدير</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student: any) => {
            const total = calculateTotal(student.id)
            return (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  {student.name} {student.surname}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    max="30"
                    min="0"
                    className="w-20"
                    onChange={(e) => handleGradeChange(student.id, "coursework", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    max="70"
                    min="0"
                    className="w-20"
                    onChange={(e) => handleGradeChange(student.id, "final", e.target.value)}
                  />
                </TableCell>
                <TableCell className="font-bold">{total}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      total >= 60 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {getGrade(total)}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <div className="flex justify-center">
        <Button className="bg-green-600 hover:bg-green-700">حفظ جميع الدرجات</Button>
      </div>
    </div>
  )
}
