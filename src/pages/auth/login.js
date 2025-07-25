import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';

export default function LoginPage() {
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
            Acesse sua conta
          </h2>
        </div>

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

        <p className="mt-8 text-center text-sm text-gray-500">
          Não tem uma conta?{' '}
          <Link href="/auth/cadastro" className="font-semibold leading-6 text-red-600 hover:text-red-500">
            Crie uma agora
          </Link>
        </p>
      </div>
    </div>
  );
}