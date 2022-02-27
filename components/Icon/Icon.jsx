const Icon = ({ set, name, color, size }) => {
  return (
    <svg
      style={{ position: "absolute" }}
      width={size}
      viewBox="0 0 1000 500"
      fill={color}
    >
      <use href={`components/Icon/Sprites/${set}.svg#${name}`} />
    </svg>
  );
};
