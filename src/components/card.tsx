type CardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function Card({ title, description, image, price }: CardProps) {
  return (
    <div className="card product-card">
      <img src={image} className="card-img-top product-image" alt={title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">{price}</p>

        <button className="btn btn-primary mt-auto">View product</button>
      </div>
    </div>
  );
}
