export default function CoreConcepts({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h3>{description}</h3>
    </li>
  );
}
