import CardInstagram from "../components/card-instagram.tsx";
import type { RSSItem } from "./rss-item.tsx";
import type { VNode } from "preact";

export class RSSData {
  version?: string;
  title?: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  language?: string;
  favicon?: string;
  items?: RSSItem[];

  RSSDataToString(): string {
    if (this.items === undefined || this.items.length === 0) {
      return `RSSthis: ${this.title} [no items]`;
    }
    var itemStrings = this.items.map((item) => item.title).join(", ");
    return `RSSthis: ${this.title} [${itemStrings.toString()}]`;
  }

  RSSDataToHTML(): VNode {
    if (!this.items || this.items.length === 0) {
      return (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>{this.title}</h1>
            <p>No items available.</p>
          </div>
        </div>
      );
    }

    return (
      <>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div className="row mt-4">
              {this.items.map((product) => (
                <div className="col-md-4" key={product.id}>
                  <CardInstagram
                    title={product.title || ""}
                    description={product.content_text || ""}
                    image={product.image || ""}
                  />
                </div>
              ))}
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        {/* CSS */}
        <style>{`
        .rss-card {
          min-height: 250px;
        }
      `}</style>
      </>
    );
  }
}
