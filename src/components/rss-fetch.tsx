import useFetch from "react-fetch-hook";
import { RSSData } from "../models/rss-data.tsx";

export default function RSSFetch({ url }: { url: string }) {
  const { isLoading, data, error } = useFetch<RSSData>(url);

  const rssData = data ? Object.assign(new RSSData(), data) : null;

  return (
    <>
      {isLoading && (
        <div>
          Loading from <code>{url}</code>
        </div>
      )}

      {rssData && (
        <div>
          {rssData.RSSDataToHTML()} <code>{url}</code>
        </div>
      )}

      {error && (
        <div>
          Error fetching data from <code>{url}</code>
        </div>
      )}
    </>
  );
}
