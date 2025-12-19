import type { VNode } from "preact";

export class RSSItem {
  id?: string;
  title?: string;
  url?: string;
  content_text?: string;
  content_html?: string;
  image?: string;
  date_published?: string;

  toString(data: RSSItem): string {
    return `RSSItem: ${data.title} (${data.id})`;
  }

  toHTML(data: RSSItem): VNode {
    return (
      <div class="card mb-3">
        <div class="card-body">
          {data.title && <h5 class="card-title">{data.title}</h5>}

          {data.date_published && (
            <h6 class="card-subtitle mb-2 text-muted">
              {new Date(data.date_published).toLocaleDateString()}
            </h6>
          )}

          {data.content_text && <p class="card-text">{data.content_text}</p>}

          {data.url && (
            <a
              href={data.url}
              class="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          )}
        </div>
      </div>
    );
  }
}
