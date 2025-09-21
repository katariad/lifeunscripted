interface ArticleSchemaProps {
  post: {
    description?: string;
    title: string;
    content: string;
    created_at: string;
    updated_at?: string;
    featured_image?: string;
    slug: string;
  };
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.featured_image,
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      "@type": "Organization",
      name: "Life Unscripted",
      url: "https://lifeunscripted.site",
    },
    publisher: {
      "@type": "Organization",
      name: "Life Unscripted",
      logo: {
        "@type": "ImageObject",
        url: "https://lifeunscripted.site/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lifeunscripted.site/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
