"use client"; 

import { useState } from "react";
import Input from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ id, label, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        label={label}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-500 hover:text-gray-700"
        onClick={toggleShowPassword}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}