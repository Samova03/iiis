import ReviewRequestsTable from "@/components/student-management/ReviewRequestsTable"

const ReviewsPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold" dir="rtl">
          طلبات المراجعة
        </h1>
      </div>

      <ReviewRequestsTable />
    </div>
  )
}

export default ReviewsPage
