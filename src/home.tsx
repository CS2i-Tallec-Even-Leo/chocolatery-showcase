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
              Découvrer la passion du chocolat à chaque bouchée.
            </p>
            <a
              href="/chocolatery-showcase/products"
              className="btn btn-primary btn-lg mt-3"
            >
              Explorez nos produits
            </a>
          </div>

          <div className="col-1"></div>
        </div>
      </div>

      {/*Introduction*/}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div style="background-color: #f68c42; padding: 20px; border-radius: 8px;">
              <h2>Notre histoire du chocolat</h2>
              <p>
                Chez Fun'ky choc, nous croyons que le chocolat est plus qu'un
                simple dessert — c'est une expérience. Nos produits sont
                soigneusement conçus en utilisant du cacao éthiquement provenant
                et des techniques traditionnelles.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="/chocolatery-showcase/images/factory.webp"
              className="img-fluid rounded"
              alt="Chocolate workshop"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Produits Vedettes</h2>

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
      <div className="container-fluid bg-secondary text-light py-5">
        <div className="row">
          <div className="col text-center">
            <h2>Prêt à goûter la différence ?</h2>
            <p className="mb-3">
              Explorez notre gamme complète de créations chocolatées
              aujourd'hui.
            </p>
            <a
              href="/chocolatery-showcase/products"
              className="btn btn-light btn-lg"
            >
              Voir tous les produits
            </a>
          </div>
        </div>
      </div>

      <p className="p-5" style="background-color: #f68c42">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sunt
        consectetur nobis alias nihil ab autem et quisquam, fuga ea deserunt
        eius veniam praesentium tenetur culpa! Dolor commodi eum earum
        voluptatum ut illo placeat perspiciatis, molestias quasi totam
        doloremque nulla rem vero illum temporibus sed repellendus voluptatem
        iste quos fuga ipsa sit error. Est aperiam magni nisi libero suscipit
        voluptates harum doloribus consectetur minima laborum vel velit
        recusandae, eius corrupti ducimus aspernatur sapiente id odio modi
        ratione et quia saepe. Quidem quod eveniet, ut sint explicabo nesciunt
        optio iusto quo recusandae. Facilis laboriosam cumque dolore fugit ipsa
        consequuntur cum vitae?
      </p>

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
