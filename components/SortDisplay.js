const SortDisplay = ({users, sort, sortHandler}) => {
    return (  <div className="flex justify-between">
    {users.length === 1 ? (
      <div className="font-bold text-gray-500 text-sm mb-4">
        {users.length} freelancer available
      </div>
    ) : (
      <div className="font-bold text-gray-500 text-sm mb-4">
        {users.length} freelancers available
      </div>
    )}
    <div className="text-sm text-right">
      Sort by{" "}
      <select
        className="font-bold bg-transparent"
        value={sort}
        onChange={sortHandler}
      >
        <option value="newest">Newest Arrivals</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  </div> );
}
 
export default SortDisplay;