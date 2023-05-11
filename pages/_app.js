import '@/styles/globals.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { createContext, useState } from 'react';
import userContext from './components/userContext'
import '../styles/chat.css';
import { AuthProvider } from './components/userContext';

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(null);

  return (
  <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>)
}
