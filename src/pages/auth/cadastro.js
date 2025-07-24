import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#78333E] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
            <Image
                className="mx-auto"
                src="/Logo.svg"
                alt="Logo EasyMeet"
                width={80}
                height={80}
            />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Crie sua conta
        </h2>
        <p className="mt-2 text-center text-lg text-gray-200">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="font-bold text-lg text-white hover:text-gray-100 underline">
            Faça login
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-4 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <Input
              id="name"
              label="Nome Completo"
              type="text"
              placeholder="Seu nome"
            />
            <Input
              id="email"
              label="Endereço de e-mail"
              type="email"
              placeholder="seu@email.com"
            />
            <PasswordInput
              id="password"
              label="Senha"
              placeholder="Crie uma senha forte"
            />
            <PasswordInput
              id="confirm-password"
              label="Confirme sua senha"
              placeholder="Digite a senha novamente"
            />
            <div>
              <Button fullWidth>Criar Conta</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}