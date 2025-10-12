import './globals.css';
import Script from 'next/script';
import DynamicBackground from './components/DynamicBackground';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Urjit Upadhyay - Flutter Developer | Tech Innovator',
  description:
    'Portfolio of Urjit Upadhyay, Flutter Developer and Tech Innovator specializing in mobile apps and blockchain solutions.',
  keywords: ['Urjit Upadhyay', 'Flutter', 'Blockchain', 'Developer', 'Portfolio'],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Urjit Upadhyay - Flutter Developer',
    // Provide a valid public image path or absolute URL if available
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DynamicBackground />
        <NavBar />
        {children}
        {/* Bootstrap JS (for modals/toasts if needed) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
