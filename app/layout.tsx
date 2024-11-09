// layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
