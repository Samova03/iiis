"use client";
import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "المجموعة أ", value: 92, fill: "#C3EBFA" },
  { name: "المجموعة ب", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative" dir="rtl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">الأداء</h1>
        <Image src="/moreDark.png" alt="المزيد" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-300">من 10 كحد أقصى LTS</p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        الفصل الدراسي الأول - الفصل الدراسي الثاني
      </h2>
    </div>
  );
};

export default Performance;
