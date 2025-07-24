import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carnes Marketplace",
  description: "O melhor lugar para comprar carnes de produtores locais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}