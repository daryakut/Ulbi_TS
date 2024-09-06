import { FC, useRef, useState } from "react";

interface EventsExampleProps {}

const EventsExample: FC<EventsExampleProps> = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
     console.log(value);
  };
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const handleOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <input type="text" ref={inputRef} placeholder="нуправляемый" />
      <button onClick={clickHandler}>Hello</button>

      <div
        onDrag={handleDrag}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={handleOver}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          margin: "10px 0",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
