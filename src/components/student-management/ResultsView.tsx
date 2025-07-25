"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ResultsView() {
  const results = [
    {
      id: "1",
      name: "أحمد محمد",
      class: "الأول أ",
      gpa: 85.5,
      status: "ناجح",
    },
  ]

  const getGradeColor = (gpa: number) => {
    if (gpa >= 90) return "bg-green-100 text-green-800"
    if (gpa >= 80) return "bg-blue-100 text-blue-800"
    if (gpa >= 70) return "bg-yellow-100 text-yellow-800"
    if (gpa >= 60) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  const getGradeText = (gpa: number) => {
    if (gpa >= 90) return "امتياز"
    if (gpa >= 80) return "جيد جداً"
    if (gpa >= 70) return "جيد"
    if (gpa >= 60) return "مقبول"
    return "راسب"
  }

  return (
    <div dir="rtl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">اسم الطالب</TableHead>
            <TableHead className="text-right">الصف</TableHead>
            <TableHead className="text-right">المعدل</TableHead>
            <TableHead className="text-right">التقدير</TableHead>
            <TableHead className="text-right">الحالة</TableHead>
            <TableHead className="text-right">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.name}</TableCell>
              <TableCell>{result.class}</TableCell>
              <TableCell className="font-bold">{result.gpa.toFixed(1)}</TableCell>
              <TableCell>
                <Badge className={getGradeColor(result.gpa)}>{getGradeText(result.gpa)}</Badge>
              </TableCell>
              <TableCell>
                <Badge className={result.status === "ناجح" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                  {result.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    عرض التفاصيل
                  </Button>
                  <Button size="sm" variant="outline">
                    طباعة الشهادة
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
