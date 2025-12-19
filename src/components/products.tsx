import Card from "./card.tsx";
import products from "../data/products.json" with { type: "json" };
export default function Products() {
  return (
    <>
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <h1>Products Page</h1>
          <p>Welcome to our delicious chocolate products showcase!</p>
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
