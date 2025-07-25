import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';

export default function RegisterPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#78333E] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto w-full max-w-md bg-white py-8 px-6 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-10">
        
        <div className="mb-8 text-center">
          <Link href="/">
              <Image
                  className="mx-auto"
                  src="/Logo.svg"
                  alt="Logo EasyMeet"
                  width={70}
                  height={70}
              />
          </Link>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>
        </div>

        <form className="space-y-6" action="#" method="POST">
          <Input id="name" label="Nome Completo" type="text" placeholder="Seu nome" />
          <Input id="email" label="Endereço de e-mail" type="email" placeholder="seu@email.com" />
          <PasswordInput id="password" label="Senha" placeholder="Crie uma senha forte" />
          <PasswordInput id="confirm-password" label="Confirme sua senha" placeholder="Digite a senha novamente" />
          <div>
            <Button fullWidth>Criar Conta</Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="font-semibold leading-6 text-red-600 hover:text-red-500">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}