import ViewStudentsPage from "@/components/student-management/view-students-page"

export default function StudentsListPage() {
  return <ViewStudentsPage onBack={() => window.history.back()} />
}
