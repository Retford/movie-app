import NavBar from '@/components/Movie/NavBar/NavBar';
import './globals.css';
import Footer from './Footer';

export const metadata = {
  title: 'App Movie',
  description: 'App Movie created with NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
