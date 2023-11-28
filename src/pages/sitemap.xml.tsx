function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://taedonn.com/</loc>
            </url>
            <url>
                <loc>https://taedonn.com/about</loc>
            </url>
        </urlset>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}
  
export default SiteMap;