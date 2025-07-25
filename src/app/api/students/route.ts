import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function POST(request: NextRequest) {
  try {
    const { sessionClaims } = auth()
    const role = (sessionClaims?.metadata as { role?: string })?.role

    if (role !== "admin") {
      return NextResponse.json({ error: "غير مصرح" }, { status: 403 })
    }

    const body = await request.json()

    // تحويل تاريخ الميلاد إلى Date object
    const birthdayDate = new Date(body.birthday)

    const student = await prisma.student.create({
      data: {
        name: body.name,
        surname: body.surname,
        username: body.username,
        email: body.email,
        phone: body.phone,
        address: body.address,
        bloodType: body.bloodType,
        birthday: birthdayDate,
        sex: body.sex,
        img: body.img || "/noAvatar.png",
        // يمكنك إضافة المزيد من الحقول حسب schema الخاص بك
      },
    })

    return NextResponse.json(student, { status: 201 })
  } catch (error) {
    console.error("خطأ في إنشاء الطالب:", error)
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 })
  }
}
