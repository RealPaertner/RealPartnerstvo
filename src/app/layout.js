import Header from '@/components/Header/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { ReturnForm } from '@/components/ReturnForm/ReturnForm';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Real Partners',
  description: 'Real Partners Company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ReturnForm />
        <Footer />
      </body>
    </html>
  );
}
