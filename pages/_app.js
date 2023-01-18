import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserProvider>
  );
}