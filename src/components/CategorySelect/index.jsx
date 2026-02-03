import { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";

import { Button } from "../Button";

import { Container, Menu, Option } from "./styles";

export function CategorySelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = value === "all" ? "Todos os temas" : value;

  function handleSelect(category) {
    onChange(category);
    setOpen(false);
  }

  return (
    <Container ref={ref}>
      <Button
        type="button"
        icon={FiFilter}
        title={selectedLabel}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <Menu>
          <Option onClick={() => handleSelect("all")}>Todos os temas</Option>

          {options.map((option) => (
            <Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </Menu>
      )}
    </Container>
  );
}
