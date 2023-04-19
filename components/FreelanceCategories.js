const FreelanceCategories = () => {
  return (
    <div className="flex flex-col sm:flex-row mb-6 gap-2">
      <div className="flex items-center bg-coBlue border rounded p-2">
        <div className="border-r border-white pr-2 pl-1">
          <img
            className="w-6 h-6"
            src="https://codeop.tech/wp-content/uploads/2023/01/coding-1-1.svg"
          />
        </div>
        <div className="p-2 text-white text-sm">Full Stack Development</div>
      </div>
      <div className="flex items-center bg-coGreen border rounded p-2">
        <div className="border-r border-white pr-2 pl-1">
          <img
            className="w-6 h-6"
            src="https://codeop.tech/wp-content/uploads/2023/01/data-scicence-2-1.svg"
          />
        </div>
        <div className="p-2 text-white text-sm">Data Science</div>
      </div>
      <div className="flex items-center bg-coPurple border rounded p-2">
        <div className="border-r border-white pr-2 pl-1">
          <img
            className="w-6 h-6"
            src="https://codeop.tech/wp-content/uploads/2023/01/product-management-1-1.svg"
          />
        </div>
        <div className="p-2 text-white text-sm">Product Management</div>
      </div>
    </div>
  );
};

export default FreelanceCategories;
