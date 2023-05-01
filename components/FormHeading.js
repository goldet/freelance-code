const FormHeading = ({ text }) => {
  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-2xl font-light mb-4 text-coBlue mt-8 sm:text-3xl">
        {text}
      </h2>
    </div>
  );
};

export default FormHeading;