import ResultsView from "@/components/student-management/ResultsView"

const ResultsPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold" dir="rtl">
          استعراض النتائج
        </h1>
      </div>

      <ResultsView />
    </div>
  )
}

export default ResultsPage
