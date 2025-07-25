import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

const GradesPage = () => {
  const columns = [
    { header: "اسم الطالب", accessor: "name" },
    { header: "الصف", accessor: "class" },
    { header: "أعمال السنة (30)", accessor: "coursework" },
    { header: "الامتحان النهائي (70)", accessor: "final" },
    { header: "المجموع", accessor: "total" },
    { header: "التقدير", accessor: "grade" },
    { header: "الإجراءات", accessor: "actions" },
  ]

  const renderRow = (item: any) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="p-4">{item.name}</td>
      <td className="p-4">{item.class}</td>
      <td className="p-4">
        <Input type="number" max="30" min="0" className="w-20" />
      </td>
      <td className="p-4">
        <Input type="number" max="70" min="0" className="w-20" />
      </td>
      <td className="p-4 font-bold">--</td>
      <td className="p-4">
        <span className="px-2 py-1 rounded text-sm bg-gray-100">--</span>
      </td>
      <td className="p-4">
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          حفظ
        </Button>
      </td>
    </tr>
  )

  const mockData = [
    { id: 1, name: "أحمد محمد", class: "الأول أ" },
    { id: 2, name: "فاطمة علي", class: "الأول أ" },
  ]

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold" dir="rtl">
          إضافة الدرجات
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" dir="rtl">
        <div>
          <Label>الصف</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="اختر الصف" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1A">الأول أ</SelectItem>
              <SelectItem value="1B">الأول ب</SelectItem>
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
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <Table columns={columns} renderRow={renderRow} data={mockData} />
    </div>
  )
}

export default GradesPage
