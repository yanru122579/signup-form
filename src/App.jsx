import { useState } from "react";
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

function TextField({ id, label }) {
  //
  const [value, setValue] = useState("");
  return (
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
          className={clsx("absolute px-3", value !== "" && "opacity-0")}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name={id}
        id={id}
        className="border w-full p-3 rounded"
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
function Button({ className, children }) {
  return (
    <div
      className={clsx(
        "rounded-lg  w-full p-4 text-center bg-green shadow-solid",
        className
      )}
    >
      {children}
    </div>
  );
}
function App() {
  return (
    <div className="text-white px-6 space-y-16">
      {/* article */}
      <article className="pt-24 text-center space-y-6">
        <h1 className="font-bold text-2xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>

      <section className="grid gap-6">
        {/* form title */}
        <Card className="bg-blue">
          <p className="px-8">
            <b>Try it free 7 days </b>
            then $20/mo. thereafter
          </p>
        </Card>
        {/* from */}
        <Card className="bg-white text-blue-dark mb-32">
          <form className="space-y-4">
            <TextField id="first-name" label="First Name" />
            <TextField id="last-name" label="Last Name" />
            <TextField id="email" label="email" />
            <TextField id="password" label="password" />
            <Button className="text-white">CLAIM YOUR FREE TRIAL</Button>
            {/* terms */}
          </form>
        </Card>
      </section>
    </div>
  );
}

export default App;
