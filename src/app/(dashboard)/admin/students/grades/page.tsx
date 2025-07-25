import AddGradesPage from "@/components/student-management/add-grades-page"

export default function GradesPage() {
  return <AddGradesPage onBack={() => window.history.back()} />
}
