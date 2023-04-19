/* component for rendering the filters */

const FiltersDisplay = ({
  locations,
  category,
  categories,
  price,
  prices,
  locationHandler,
  categoryHandler,
  priceHandler,
  skillsHandler,
  skills,
  skill,
  location
}) => {
  return (
    <div className="flex flex-col mb-6 gap-2 sm:flex-row">
      <div>
        <h2>Location</h2>
        <select
          className="bg-white border border-black rounded"
          value={location}
          onChange={locationHandler}
        >
          <option value="all">All</option>
          {locations &&
            locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h2>Categories</h2>
        <select
          className="bg-white border border-black rounded"
          value={category}
          onChange={categoryHandler}
        >
          <option value="all">All</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h2>Budget</h2>
        <select
          className="bg-white border border-black rounded"
          value={price}
          onChange={priceHandler}
        >
          <option value="all">All</option>
          {prices &&
            prices.map((price) => (
              <option key={price.value} value={price.value}>
                {price.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h2>Skills</h2>
        <select
          className="bg-white border border-black rounded"
          value={skill}
          onChange={skillsHandler}
        >
          <option value="all">All</option>
          {skills &&
            skills.map((skill) => (
              <option key={skill.id} value={skill.value}>
                {skill.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersDisplay;
