import Card from "./Card";

const UserCards = ({ users }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users.map((user, index) => {
        return <Card user={user} key={index} />;
      })}
    </div>
  );
};

export default UserCards;
