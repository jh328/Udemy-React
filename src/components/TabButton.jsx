export default function TabButton({ children, isSelected, ...props }) {
  console.log("Tabutton comonente");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
