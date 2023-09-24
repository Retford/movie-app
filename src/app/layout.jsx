import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className='p-8'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}