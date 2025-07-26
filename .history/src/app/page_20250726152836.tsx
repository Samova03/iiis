import { redirect } from "next/navigation";

export default function HomePage() {
  // إعادة توجيه تلقائي لصفحة الأدمن
  redirect("/admin");
}

// أو إذا كنت تريد صفحة رئيسية فعلية:
/*
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          نظام إدارة المدرسة
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          مرحباً بك في لوحة التحكم
        </p>
        <a 
          href="/admin" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
        >
          الدخول للوحة التحكم
        </a>
      </div>
    </div>
  );
}
*/