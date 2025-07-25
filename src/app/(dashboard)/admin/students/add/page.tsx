import AddStudentForm from "@/components/student-management/add-student-form"

export default function AddStudentPage() {
  return <AddStudentForm onBack={() => window.history.back()} />
}
