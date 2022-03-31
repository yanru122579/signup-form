import React, { useState } from "react";
import { ReactComponent as ErrorIcon } from "./images/icon-error.svg";
function clsx(...str) {
  return str.filter(Boolean).join(" ");
}
function Card({ children, className }) {
  return (
    <div
      className={clsx("rounded-lg  w-full p-4 text-center shadow", className)}
    >
      {children}
    </div>
  );
}

function TextField({ id, label, error }) {
  //
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="relative flex items-center">
        {/* 第一種用法 三元 */}
        {/* {value ? (
        ""
      ) : (
        <label className="absolute px-3" htmlFor={id}>
          First-name
        </label>
      )} */}
        {/* 第二種用法 */}
        {value === "" && (
          <label
            className={clsx(
              "absolute px-3",
              "text-md font-medium",
              value !== "" && "opacity-0",
              error && "text-red"
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type="text"
          name={id}
          id={id}
          className={clsx(
            "outline-none",
            "border  border-opacity-10 w-full p-3 rounded",
            error
              ? "border-red border-opacity-100"
              : "focus:border-blue border-blue-dark"
          )}
          onChange={(event) => setValue(event.target.value)}
        />
        {error && (
          <span className="absolute right-0 py-3  h-full w-8">
            <ErrorIcon />
          </span>
        )}
      </div>
      {error && (
        <div className="flex justify-end">
          <span className="text-sm text-red">{error}</span>
        </div>
      )}
    </div>
  );
}
function Button({ className, children }) {
  return (
    <button
      className={clsx(
        "rounded-lg  w-full p-4 text-center bg-green shadow-solid",
        className
      )}
    >
      {children}
    </button>
  );
}
function App() {
  const [formstate, setFormstate] = useState([
    {
      id: "first-name",
      error: false,
      label: "First Name",
      errorMsg: "First Name cannot be empty",
    },
    {
      id: "last-name",
      error: false,
      label: "Last Name",
      errorMsg: "Last Name cannot be empty",
    },
    {
      id: "email",
      error: false,
      label: "email",
      errorMsg: "Looks Like this is not an email",
    },
    {
      id: "password",
      error: false,
      label: "password",
      errorMsg: "Password cannot be empty",
    },
  ]);
  /**
   * @param{Event} event
   */
  function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    // 將form裡面的東西取出來並轉成物件
    //entries 將array內的key 配對一個索引值 ex: arr=['a','b'] -> arr=[0,"a",1,"b"]
    //fromEntries 轉物件
    const data = Object.fromEntries(form.entries());

    setFormstate((formstate) =>
      formstate.map((state) => ({
        ...state,
        error: !Boolean(data[state.id]),
      }))
    );
  }
  return (
    <div className="h-full text-white px-6 gap-16 flex flex-col md:flex-row md:items-center max-w-7xl mx-auto">
      {/* article */}
      <article className="pt-24 md:pt-0 text-center md:text-left space-y-6 md:flex-1">
        <h1 className="font-bold text-2xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>

      <section className="grid gap-6 md:flex-1">
        {/* form title */}
        <Card className="bg-blue">
          <p className="px-8">
            <b>Try it free 7 days </b>
            then $20/mo. thereafter
          </p>
        </Card>
        {/* from */}
        <Card className="bg-white text-blue-dark mb-32">
          <form className="space-y-4" onSubmit={onSubmit}>
            {formstate.map(({ id, label, errorMsg, error }) => (
              <TextField
                key={id}
                id={id}
                label={label}
                error={error && errorMsg}
              />
            ))}

            <Button className="text-white">CLAIM YOUR FREE TRIAL</Button>
            {/* terms */}
            <div>
              <p className="text-gray text-xs px-4">
                By clicking the button, you are agreeing to our
                <a href="#" className="text-red  font-bold">
                  Terms and Services
                </a>
              </p>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}

export default App;
