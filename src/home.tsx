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

      {/* Introduction */}
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
              src="factory.webp"
              className="img-fluid rounded"
              alt="Chocolate workshop"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Chocolates</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="chocolate-bar.jpg"
                className="card-img-top product-image"
                alt="Chocolate Bar"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Dark Chocolate Bar</h5>
                <p className="card-text">
                  Intense cocoa flavor with a smooth finish.
                </p>
                <button className="btn btn-outline-primary mt-auto">
                  Discover
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="chocolate-truffles.jpg"
                className="card-img-top product-image"
                alt="Chocolate Truffles"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Chocolate Truffles</h5>
                <p className="card-text">
                  Creamy center coated in fine cocoa powder.
                </p>
                <button className="btn btn-outline-primary mt-auto">
                  Discover
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="hot-chocolate.jpg"
                className="card-img-top product-image"
                alt="Hot Chocolate"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Hot Chocolate</h5>
                <p className="card-text">
                  A warm, comforting drink made from real chocolate.
                </p>
                <button className="btn btn-outline-primary mt-auto">
                  Discover
                </button>
              </div>
            </div>
          </div>
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
