import StoreProvider from '../context/providers/StoreProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />{' '}
      <footer>
        <p>© {new Date().getFullYear()} | Discover Coffee Stores</p>
      </footer>
    </StoreProvider>
  );
}

export default MyApp;
