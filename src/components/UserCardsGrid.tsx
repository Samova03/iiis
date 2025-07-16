import UserCard from "./UserCard";

const UserCardsGrid = async () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex gap-4 w-max animate-slide">
        {["admin", "teacher", "student", "parent"].map((type) => (
          <UserCard key={type} type={type as any} />
        ))}
      </div>
    </div>
  );
};

export default UserCardsGrid;
