// src/components/ui/Button.js
export default function Button({ type = 'submit', children, fullWidth = false }) {
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={`flex justify-center py-3 px-4 border border-transparent cursor-pointer rounded-lg shadow-md text-sm font-bold text-white 
                 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
                 active:scale-95 ${widthClass}`}
    >
      {children}
    </button>
  );
}