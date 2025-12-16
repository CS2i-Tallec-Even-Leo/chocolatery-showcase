export default function Products() {
  return (
    <>
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <h1>Products Page</h1>
          <p>Welcome to our delicious chocolate products showcase!</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card product-card">
                <img
                  src="chocolate-bar.jpg"
                  className="card-img-top product-image"
                  alt="Chocolate Bar"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Chocolate Bar</h5>
                  <p className="card-text">
                    Rich dark chocolate made with premium cocoa.
                  </p>
                  <p className="btn btn-primary mt-auto">View product</p>
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
                    Smooth and creamy truffles with a cocoa coating.
                  </p>
                  <p className="btn btn-primary mt-auto">View product</p>
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
                    Warm, comforting chocolate drink for cold days.
                  </p>
                  <p className="btn btn-primary mt-auto">View product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
      </div>

      {/* CSS */}
      <style>{`
        .product-card {
          height: 530px;
        }

        .product-image {
          height: 350px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
