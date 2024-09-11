import { useState } from "react";
import { Input } from "../ui/input";

interface FieldProps {
  label: string;
}

function Field({ label }: FieldProps) {
  const [text, setText] = useState("");

  return (
    <section>
      <label>
        {label || ""}
        <Input
          type="text"
          value={text}
          placeholder={label}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </section>
  );
}

export default function ReconcilitionPart2() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label className="flex gap-1">
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <section>
        <p className="font-bold">2. Intercambiar dos campos de formulario</p>
        <Field key="lastName" label="Last name" />
        <Field key="firstName" label="First name" />
        {checkbox}
      </section>
    );
  } else {
    return (
      <section>
        <p className="font-bold">2. Intercambiar dos campos de formulario</p>
        <Field key="firstName" label="First name" />
        <Field key="lastName" label="Last name" />
        {checkbox}
      </section>
    );
  }
}
