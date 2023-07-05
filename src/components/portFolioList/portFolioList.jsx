import "./portFolioList.scss";

export default function portFolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? " portFolioList active" : "portFolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
