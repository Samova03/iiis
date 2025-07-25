import StudentManagementTabs from "@/components/student-management/StudentManagementTabs"
import { auth } from "@clerk/nextjs/server"

const AdminPage = async () => {
  const { sessionClaims } = auth()
  const role = (sessionClaims?.metadata as { role?: string })?.role

  if (role !== "admin") {
    return <div>غير مصرح لك بالوصول لهذه الصفحة</div>
  }

  return (
    <div className="p-4 flex gap-4 flex-col">
      {/* الإحصائيات الموجودة */}
      <div className="flex gap-4 justify-between flex-wrap">{/* يمكنك الاحتفاظ بالكروت الموجودة هنا */}</div>

      {/* إضافة تبويبات إدارة الطلاب الجديدة */}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4" dir="rtl">
          إدارة الطلاب
        </h2>
        <StudentManagementTabs />
      </div>
    </div>
  )
}

export default AdminPage
