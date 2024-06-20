import { useState } from "react"

export default function Player({ intialName, symbole, isActive, onChangename }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(intialName);
  function handleEdit() {
    setEdit(editing => !editing)
    if (edit) {
      onChangename(symbole, name)
    }
  }
  function handleChange(e) {
    setName(e.target.value)
  }
  let playerName = edit ? <input type="text" required value={name} onChange={handleChange} /> : <span className="player-name">{name}</span>;
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbole}</span>
      </span>
      <button onClick={handleEdit}>{!edit ? "Edit" : "Save"}</button>
    </li>
  )
}