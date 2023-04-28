import Select from "react-select"; // belongs to autocomplete component

const ProfileCompletionForm = ({
  handleSubmit,
  services,
  handleChange,
  categories,
  handleSkills,
  animatedComponents,
  options,
  document,
  handleDocument

}) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 mt-6"
    >
      <div>
        <h3 className="font-bold mb-4">Profile</h3>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Job title
            <input
              type="text"
              name="service_type"
              value={services.service_type}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Category
          </label>

          <select
            name="category"
            value={services.category}
            onChange={(e) => handleChange(e)}
            className="shadow  border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            About you
            <textarea
              name="description"
              rows="4"
              cols="50"
              value={services.description}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue placeholder:text-xs placeholder:text-gray-400 placeholder:font-light"
              placeholder="Tell us about your background, education and relevant experience in the field. Max. 500 characters."
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            What languages do you speak?
            <input
              type="text"
              name="languages"
              value={services.languages}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
            />
          </label>
        </div>

        <div className="mb-8">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Set Hourly rate (€):
            <input
            /* fix this number element */
              /* type="number" */
              name="hourly_rate"
              value={services.hourly_rate}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
            />
          </label>
        </div>

        <h3 className="font-bold mb-4">Portfolio</h3>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Set Skills
            <Select
              onChange={handleSkills}
              closeMenuOnSelect={false}
              components={animatedComponents}
              placeholder="Select skills from the dropdown menu"
              isMulti
              options={options}
              value={services.skills}
            />
            <input
              value={services.skills}
              readOnly
              required
              className="order-none outline-none caret-transparent h-1 mt-0 pt-0 text-transparent"
              
            />
          </label>
        </div>

        <div className="flex gap-4">
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-medium mb-2">
              Github
              <input
                type="url"
                name="github_url"
                value={services.github_url}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-medium mb-2">
              LinkedIn
              <input
                type="url"
                name="linkedin_url"
                value={services.linkedin_url}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Additional links
            <input
              type="url"
              name="other_url"
              value={services.other_url}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue placeholder:text-xs placeholder:text-gray-400 placeholder:font-light"
              placeholder="Any other links, for example a personal portfolio website"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-medium mb-2">
            Resume/CV
            {document ? (
              <iframe
                src={URL.createObjectURL(document)}
                alt="document"
                className="h-16 w-16 mb-2"
              />
            ) : (
              <div className="h-16 w-16 mb-2 bg-gray-200"></div>
            )}
            <input
              type="file"
              onChange={handleDocument}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue placeholder:text-xs placeholder:text-gray-400 placeholder:font-light"
            ></input>
          </label>
        </div>

        <button className="w-full bg-coGreen hover:bg-emerald-500 text-white py-2 px-4 rounded-md mb-4">
          Finish setup
        </button>
      </div>
    </form>
  );
};

export default ProfileCompletionForm;
