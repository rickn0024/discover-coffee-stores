import SEO from './SEO';

export default function Layout({ children, pageMeta }) {
  return (
    <div>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        url={pageMeta.url}
        image={pageMeta.image}
        creator={pageMeta.creator}
      />
      <main>{children}</main>
    </div>
  );
}
