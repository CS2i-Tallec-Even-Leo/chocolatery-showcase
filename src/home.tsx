import products from "./data/products.json" with { type: "json" };
import Card from "./components/card.tsx";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-dark text-light py-5">
        <div className="row">
          <div className="col-1"></div>

          <div className="col-10 text-center">
            <h1 className="display-4 fw-bold">Fun'ky Choc</h1>
            <p className="lead mt-3">
              Discover handcrafted chocolates made with passion and premium
              cocoa.
            </p>
            <button className="btn btn-primary btn-lg mt-3">
              Explore our products
            </button>
          </div>

          <div className="col-1"></div>
        </div>
      </div>

      {/*Introduction*/}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Chocolate Story</h2>
            <p>
              At Chocolate Heaven, we believe chocolate is more than a treat —
              it's an experience. Our products are carefully crafted using
              ethically sourced cocoa and traditional techniques.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="images/factory.webp"
              className="img-fluid rounded"
              alt="Chocolate workshop"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Chocolates</h2>

        <div className="row mt-4">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="container-fluid bg-secondary text-light py-5">
        <div className="row">
          <div className="col text-center">
            <h2>Ready to taste the difference?</h2>
            <p className="mb-3">
              Explore our full range of chocolate creations today.
            </p>
            <button className="btn btn-light btn-lg">View all products</button>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .product-card {
          height: 420px;
        }

        .product-image {
          height: 180px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
