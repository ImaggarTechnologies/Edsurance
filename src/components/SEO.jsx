import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, path = "/" }) => {
  const siteName = "Edsurance";
  const siteUrl = "https://edsurance.com";
  const fullTitle = `${title} | ${siteName}`;
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
