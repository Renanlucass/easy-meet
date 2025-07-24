import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#78333E] flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
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
          Acesse sua conta
        </h2>
        <p className="mt-2 text-center text-lg text-gray-200">
          Ou{' '}
          <Link href="/auth/cadastro" className="font-bold text-white hover:text-gray-100 underline">
            crie uma nova conta
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-4 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <Input
              id="email"
              label="Endereço de e-mail"
              type="email"
              placeholder="seu@email.com"
            />
            <PasswordInput
              id="password"
              label="Senha"
              placeholder="Sua senha"
            />
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div>
              <Button fullWidth>Entrar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}