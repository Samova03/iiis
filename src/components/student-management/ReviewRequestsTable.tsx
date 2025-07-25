"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Eye } from "lucide-react"

export default function ReviewRequestsTable() {
  const [requests, setRequests] = useState([
    {
      id: "1",
      studentName: "أحمد محمد",
      subject: "الرياضيات",
      currentGrade: 65,
      requestedGrade: 75,
      reason: "خطأ في التصحيح",
      status: "pending",
    },
  ])

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    }

    const labels = {
      pending: "معلق",
      approved: "موافق عليه",
      rejected: "مرفوض",
    }

    return <Badge className={colors[status] || "bg-gray-100 text-gray-800"}>{labels[status] || status}</Badge>
  }

  return (
    <div dir="rtl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">اسم الطالب</TableHead>
            <TableHead className="text-right">المادة</TableHead>
            <TableHead className="text-right">الدرجة الحالية</TableHead>
            <TableHead className="text-right">الدرجة المطلوبة</TableHead>
            <TableHead className="text-right">الحالة</TableHead>
            <TableHead className="text-right">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.studentName}</TableCell>
              <TableCell>{request.subject}</TableCell>
              <TableCell className="text-red-600 font-bold">{request.currentGrade}</TableCell>
              <TableCell className="text-green-600 font-bold">{request.requestedGrade}</TableCell>
              <TableCell>{getStatusBadge(request.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                  {request.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
