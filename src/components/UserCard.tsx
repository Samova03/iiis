import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };

  const data = await modelMap[type].count();

  const typeLabels: Record<typeof type, string> = {
    admin: "مسؤول",
    teacher: "معلم",
    student: "طالب",
    parent: "ولي أمر",
  };

  return (
    <div
      className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]"
      dir="rtl"
    >
      <div className="flex justify-between items-center">
        <Image
          src={`/icons/${type}.png`}
          alt={type}
          width={35}
          height={35}
          className="object-contain"
        />
        <Image src="/more.png" alt="المزيد" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="text-sm font-medium text-gray-500">{typeLabels[type]}</h2>
    </div>
  );
};

export default UserCard;
