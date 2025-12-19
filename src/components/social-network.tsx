import RSSFeed from "./rss-fetch.tsx";

export default function Social() {
  return (
    <>
      <h1>Social Network Page</h1>
      <RSSFeed url="https://rss.app/feeds/v1.1/UQTGGFPoBi78F72Y.json" />
    </>
  );
}

// https://rss.app/feeds/v1.1/UQTGGFPoBi78F72Y.json
