import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="px-0 lg:px-16">
      <div className="px-8 lg:px-16 py-16 bg-nl_sec_background flex flex-col sm:flex-row">
        <div className="flex-1 flex flex-col">
          <div>
            <p className="text-sm text-nl_background font-bold">
              GENERAL INQUIRIES
            </p>
            <a
              className="underline underline-offset-4"
              href="mailto:hello@company.com"
            >
              hello@company.com
            </a>
          </div>
          <div className="mt-5">
            <p className="text-sm text-nl_background font-bold">
              WANT TO WORK/ADVERTISE WITH US{" "}
            </p>
            <a
              className="underline underline-offset-4"
              href="mailto:patnership@company.com"
            >
              patnership@company.com
            </a>
          </div>
        </div>
        <div className="flex-1 mt-5 sm:mt-0">
          <div>
            <h2 className="text-2xl text-nl_background py-4">Inquiry</h2>
            <p className="text-sm w-2/3 pb-8">
              Leave us your details and a member of our team will get back to
              you as soon as possible
            </p>
          </div>
          <form className="flex flex-col">
            <div className="flex gap-3">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="firstname">
                  First Name
                </Label>
                <Input
                  id="firstname"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter first name"
                />
              </div>
              <div className="flex-1">
                <Label className="font-normal" htmlFor="lastname">
                  Last Name
                </Label>
                <Input
                  id="lastname"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="job">
                  Job title
                </Label>
                <Input
                  id="job"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter position"
                />
              </div>
              <div className="flex-1">
                <Label className="font-normal" htmlFor="market">
                  Market
                </Label>
                <Input
                  id="market"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter target market"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex-1">
                <Label className="font-normal" htmlFor="company">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div className="flex mt-8 basis-40">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="partnership-details">
                  Message
                </Label>
                <Textarea
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none h-4/5"
                  placeholder="Enter message text here"
                  id="partnership-details"
                />
              </div>
            </div>

            <div className="flex mt-8">
              <div className="flex-1 flex justify-between items-center">
                <p className="text-sm">
                  By submitting this form you agree to our{" "}
                  <Link className="underline underline-offset-4" href="#">
                    Privacy Policy
                  </Link>
                </p>
                <button className="bg-black px-4 py-1 text-white" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
