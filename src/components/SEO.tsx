import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {url && <link rel="canonical" href={url} />}

      {/* Open Graph (WhatsApp / Facebook) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}

      {/* Local SEO */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Chengannur, Kerala" />
      <meta name="geo.placename" content="Thiruvalla, Kerala" />
      <meta name="geo.placename" content="Mavelikara, Kerala" />
      <meta name="geo.placename" content="Pathanamthitta, Kerala" />
    </Helmet>
  );
};

export default SEO;