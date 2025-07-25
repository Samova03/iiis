"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, User } from "lucide-react"
import FormContainer from "@/components/FormContainer"

export default function AddStudentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    bloodType: "",
    birthday: "",
    sex: "",
  })

  const steps = [
    { number: 1, title: "البيانات الأساسية" },
    { number: 2, title: "معلومات الاتصال" },
    { number: 3, title: "البيانات الإضافية" },
    { number: 4, title: "المستندات" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8" dir="rtl">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
              currentStep >= step.number ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            {step.number}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-20 h-1 mx-2 ${currentStep > step.number ? "bg-blue-500" : "bg-gray-300"}`} />
          )}
        </div>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <div className="bg-white p-6 rounded-md border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" dir="rtl">
        <User className="w-5 h-5 text-blue-500" />
        البيانات الأساسية
      </h3>

      <div className="space-y-4" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">الاسم الأول</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="أدخل الاسم الأول"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="surname">اسم العائلة</Label>
            <Input
              id="surname"
              value={formData.surname}
              onChange={(e) => handleInputChange("surname", e.target.value)}
              placeholder="أدخل اسم العائلة"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="username">اسم المستخدم</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder="أدخل اسم المستخدم"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="sex">الجنس</Label>
            <Select onValueChange={(value) => handleInputChange("sex", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="اختر الجنس" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MALE">ذكر</SelectItem>
                <SelectItem value="FEMALE">أنثى</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="birthday">تاريخ الميلاد</Label>
          <Input
            id="birthday"
            type="date"
            value={formData.birthday}
            onChange={(e) => handleInputChange("birthday", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Header - نفس تصميم الصفحات الموجودة */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold" dir="rtl">
          إضافة طالب جديد
        </h1>
        <div className="flex items-center gap-4">
          <FormContainer table="student" type="create" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {renderStepIndicator()}

        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {/* يمكنك إضافة باقي الخطوات هنا */}
        </div>

        <div className="flex justify-between" dir="rtl">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            السابق
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2"
            >
              التالي
              <ArrowLeft className="w-4 h-4" />
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">✓ حفظ بيانات الطالب</Button>
          )}
        </div>
      </div>
    </div>
  )
}
