import { MdSearch } from 'react-icons/md';

const HeroSection = ({searchHandler}) => {
  return (
    <section className="bg-coBlue w-full text-white">
      <div className="max-w-5xl mx-auto px-4 py-9">
        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl mb-4">
              Find freelance services from our CodeOp Bootcamp alumni network
            </h1>
            <div className="flex">
              <div className="grid place-items-center h-10 w-8 bg-white rounded-l-md">
                <MdSearch className="text-gray-400 text-xl" />
              </div>
              <input
                onChange={searchHandler}
                type="text"
                className="w-full text-black bg-white h-10 px-0 pr-16 rounded-r-md text-sm focus:outline-none md:w-4/5"
                placeholder="Search for services"
              />
            </div>
          </div>
          <div>
            <img
              className="rounded w-64 sm:w-96"
              src="https://codeop.tech/wp-content/uploads/2021/06/learn@2x.png"
              alt="CodeOp Community"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
