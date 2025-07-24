export default function Input({ id, label, type = 'text', placeholder, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required
          className="w-full px-4 py-3 bg-[#D9D9D9] border-2 border-transparent rounded-lg shadow-sm placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                     transition-shadow duration-200"
          {...props}
        />
      </div>
    </div>
  );
}