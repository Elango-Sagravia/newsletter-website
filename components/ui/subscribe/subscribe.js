export default function Subscribe() {
  return (
    <div className="min-h-96 bg-nl_sec_background px-8 md:px-16 py-16">
      <div className="mx-auto w-full sm:w-[400px]">
        <h5 className="text-nl_background text-5xl leading-[3rem] text-center">
          Get Daily News in your inbox
        </h5>
        <form className="pt-4 pb-4 flex max-w-md mt-8 px-2">
          <input
            style={{
              border: "1px solid",
              padding: ".5rem 1rem",
              border: "1px solid hsl(0 4.76% 83.53%)",
              // width: "60%",
            }}
            type="email"
            placeholder="Enter your email..."
            className="flex-1"
          />
          <button
            style={{
              padding: ".5rem 1rem",
              // border: "1px solid #000000",
              backgroundColor: "rgba(0,0,0)",
              color: "white",
              marginLeft: "5px",
            }}
            type="submit"
          >
            Join Free
          </button>
        </form>
        <p className="text-sm self-start px-2">
          100% free. No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
