import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Statik çıxarış rejimini aktiv edir (npm run build zamanı 'out' qovluğu yaradır) */
  output: 'export',

  /* 2. Statik saytlarda şəkli optimizasiya edən server olmadığı üçün bu şərtdir */
  images: {
    unoptimized: true,
  },

  /* 3. Əgər saytın alt qovluqda (məsələn: anvarkhalid.com/portfolio) yerləşəcəksə, aşağıdakı sətri aç: */
  // basePath: '/portfolio',

  /* 4. Trailing slash - URL-lərin sonuna "/" əlavə edir (SEO və bəzi hostinqlər üçün yaxşıdır) */
  trailingSlash: true,
};

export default nextConfig;