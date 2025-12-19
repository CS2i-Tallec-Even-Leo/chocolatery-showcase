type CardInstagramProps = {
  title: string;
  description: string;
  image: string;
};

export default function CardInstagram({
  title,
  description,
  image,
}: CardInstagramProps) {
  return (
    <div className="card product-card">
      <img src={image} className="card-img-top product-image" alt={title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <button className="btn btn-primary mt-auto">View product</button>
      </div>
    </div>
  );
}
