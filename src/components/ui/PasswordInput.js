// src/components/ui/PasswordInput.js
"use client"; // Este componente precisa ser um Client Component para usar o estado (useState)

import { useState } from "react";
import Input from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ id, label, placeholder }) {
  // Estado para controlar se a senha está visível
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        label={label}
        // O tipo do input muda de acordo com o estado
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <button
        type="button" // Importante ser 'button' para não submeter o formulário
        className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-500 hover:text-gray-700"
        onClick={toggleShowPassword}
      >
        {/* O ícone muda de acordo com o estado */}
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}