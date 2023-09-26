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
      <head>
        <link rel='icon' type='image/png' href='/favicon.png' sizes='32x32' />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
