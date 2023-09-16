import React, { useState } from "react";

export default function CardLink({ remove, id, update, check }) {
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className="card">
      <div className="link_remove">
        <p> Link #{id}</p>
        <span
          className="remove"
          onClick={() => {
            remove(id);
          }}
        >
          Remove
        </span>
      </div>
      <div className="platform">
        <label> Platform </label>
        <select
          className="form-select form-select-md mb-3"
          aria-label="Large select example"
          onChange={(event) => {
            setIcon(event.target.value);
            update(id, {
              id: id,
              link: link,
              name: event.target.value,
            });
            check();
          }}
        >
          <option defaultValue>Open this select menu</option>
          <option value="GitHub">GitHub</option>
          <option value="Facebook">Facebook</option>
          <option value="Linkedin">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="Youtube">Youtube</option>
        </select>
      </div>
      <div className="Link">
        <div className="input-group mb-3">
          <i
            className="bi bi-link-45deg input-group-text"
            id="basic-addon1"
          ></i>
          <input
            onChange={(event) => {
              setLink(event.target.value);
              update(id, {
                id: id,
                link: event.target.value,
                name: icon,
              });
              check();
            }}
            type="text"
            className="form-control"
            placeholder="Link"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}
