import rss from "@astrojs/rss";
import { siteConfig } from "@/config/site.js";
import works from "@/collections/works.json";

export async function GET(context) {
    const items = works
        .filter((w) => w.isShow)
        .map((w) => ({
            title: w.name,
            description: w.description,
            // Prefer external website if present, otherwise fall back to internal url
            link: w.website || w.url,
            pubDate: new Date(),
        }));

    return rss({
        title: `${siteConfig.title} – Projects`,
        description: siteConfig.meta.description,
        // This only matters for INTERNAL links; external links won’t be prefixed
        site: siteConfig.url,
        items,
    });
}
