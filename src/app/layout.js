import './globals.scss'
import { AppContextProvider } from '../config/Store';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Intro Church',
  description: 'Welcome to Intro Church',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Nav />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
