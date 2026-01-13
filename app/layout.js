import './globals.css';
import Script from 'next/script';
import DynamicBackground from './components/DynamicBackground';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Urjit Upadhyay - Flutter & MERN Developer | Backend | Blockchain',
  description:
    'Portfolio of Urjit Upadhyay — Flutter Developer, MERN Developer, Backend Engineer, and Blockchain Enthusiast. Building cross-platform apps, scalable backends, and web apps.',
  keywords: ['Urjit Upadhyay', 'Flutter', 'MERN', 'Backend', 'Blockchain', 'Developer', 'Portfolio'],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Urjit Upadhyay - Flutter & MERN Developer',
    // Provide a valid public image path or absolute URL if available
  },
  icons: {
    icon: '/favicon.ico'
  },
  verification: {
    google: 'dum5Ja2KmpYXm-bpGOf5Tp4o50VABihn6xabodwYZ2Q'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <DynamicBackground />
        <NavBar />
        {children}
        {/* Bootstrap JS (for modals/toasts if needed) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

