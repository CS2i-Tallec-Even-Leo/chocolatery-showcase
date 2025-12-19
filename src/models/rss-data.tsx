import type { RSSItem } from "./rss-item.tsx";

export class RSSData {
  version?: string;
  title?: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  language?: string;
  favicon?: string;
  items?: RSSItem[];
}
