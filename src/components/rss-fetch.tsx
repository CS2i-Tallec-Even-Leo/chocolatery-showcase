import useFetch from "react-fetch-hook";
import { RSSData } from "../models/rss-data.tsx";
import CardInstagram from "./card-instagram.tsx";

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
        <>
          <script async src="//www.instagram.com/embed.js"></script>
          <div className="row">
            <div className="col-10" style={{ marginLeft: "5%" }}>
              <div className="row mt-12">
                {rssData.items?.map((item) => (
                  <CardInstagram item={item} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {error && (
        <div>
          Error fetching data from <code>{url}</code>
        </div>
      )}
    </>
  );
}
