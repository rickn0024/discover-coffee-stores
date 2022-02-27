import Link from 'next/link';

function Header404() {
  return (
    <section>
      <div>
        <h1>404</h1>
        <h2>Lost in space?</h2>
        <Link href="/">
          <a>
            <button>Go back home</button>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Header404;
