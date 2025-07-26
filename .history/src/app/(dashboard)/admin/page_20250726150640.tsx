// import StudentManagementTabs from "@/components/student-management/StudentManagementTabs"
// import { auth } from "@clerk/nextjs/server"

// const AdminPage = async () => {
//   const { sessionClaims } = auth()
//   const role = (sessionClaims?.metadata as { role?: string })?.role

//   if (role !== "admin") {
//     return <div>غير مصرح لك بالوصول لهذه الصفحة</div>
//   }

//   return (
//     <div className="p-4 flex gap-4 flex-col">
//       {/* الإحصائيات الموجودة */}
//       <div className="flex gap-4 justify-between flex-wrap">{/* يمكنك الاحتفاظ بالكروت الموجودة هنا */}</div>

//       {/* إضافة تبويبات إدارة الطلاب الجديدة */}
//       <div className="bg-white p-4 rounded-md">
//         <h2 className="text-xl font-semibold mb-4" dir="rtl">
//           إدارة الطلاب
//         </h2>
//         <StudentManagementTabs />
//       </div>
//     </div>
//   )
// }

// export default AdminPage
import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams}/>
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;

