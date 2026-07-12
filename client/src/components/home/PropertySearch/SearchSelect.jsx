function SearchSelect({ label, options }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select
        className="
        w-full
        rounded-xl
        border
        border-gray-200
        bg-gray-50
        px-4
        py-3
        outline-none
        focus:border-blue-600
        "
      >
        <option>Select {label}</option>

        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchSelect;
