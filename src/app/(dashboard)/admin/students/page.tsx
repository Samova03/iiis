import StudentManagementCards from "@/components/StudentManagementCards"

const AdminStudentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-orange-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">نظام إدارة الطلاب</h1>
              <p className="text-orange-100 mt-1">المعهد المتوسط للدراسات الإسلامية - عثمان بن عفان</p>
            </div>
            <div className="text-right">
              <div className="bg-orange-700 px-4 py-2 rounded-lg">
                <span className="text-sm">لوحة التحكم الرئيسية</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">لوحة التحكم الرئيسية</h2>
          <p className="text-gray-600">إدارة شؤون الطلاب والدرجات</p>
        </div>

        <StudentManagementCards />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 mt-8">
          <div className="bg-purple-100 p-6 rounded-lg text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600">95%</div>
            <div className="text-sm text-purple-800 mt-1">معدل النجاح</div>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg text-center border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-600">8</div>
            <div className="text-sm text-yellow-800 mt-1">طلبات مراجعة</div>
          </div>

          <div className="bg-green-100 p-6 rounded-lg text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600">12</div>
            <div className="text-sm text-green-800 mt-1">طلاب جدد</div>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg text-center border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600">245</div>
            <div className="text-sm text-blue-800 mt-1">إجمالي الطلاب</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStudentsPage
