import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ReconcilitionPart1() {
  const [showHint, setShowHint] = useState(false);
  return (
    <section>
      <p className="font-bold">
        1. Arreglar el texto de entrada que desaparece
      </p>
      {showHint ? (
        <article>
          <div className="flex gap-2">
            <Form />
            <Button
              onClick={() => {
                setShowHint(false);
              }}
            >
              Hide hint
            </Button>
          </div>
        </article>
      ) : (
        <article>
          <div className="flex gap-2">
            <Form />
            <Button
              variant={"default"}
              onClick={() => {
                setShowHint(true);
              }}
            >
              Show hint
            </Button>
          </div>
        </article>
      )}
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
    </section>
  );
}

function Form() {
  const [text, setText] = useState("");
  return (
    <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-96"
    />
  );
}
