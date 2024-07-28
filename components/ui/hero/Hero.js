import { Divide } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <div className="flex px-8 md:px-16 py-16 bg-nl_sec_background">
      <div className="flex-1">
        <h1
          className="text-nl_background text-5xl leading-10"
          style={{ lineHeight: "3.5rem" }}
        >
          Want to understand geopolitics, macroeconomics, and more? Start here.
        </h1>
        <p className="pt-4 pb-8">
          For everyone curious about global politics, economic trends, and
          macroeconomic policies, Get the 5-minute newsletter
        </p>
        <form className="pt-4 pb-4 flex">
          <input
            style={{
              border: "1px solid",
              padding: ".5rem 1rem",
              minWidth: "50%",
              border: "1px solid hsl(0 4.76% 83.53%)",
            }}
            type="email"
            placeholder="Enter your email..."
          />
          <button
            style={{
              padding: ".5rem 1rem",
              border: "1px solid #000000",
              backgroundColor: "rgba(0,0,0)",
              color: "white",
              marginLeft: "5px",
            }}
            type="submit"
          >
            Join Free
          </button>
        </form>
        <p className="text-sm">100% free. No spam. Unsubscribe anytime.</p>
      </div>
      <div className="hidden flex-1 lg:block">Image</div>
    </div>
  );
}
