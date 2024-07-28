import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AdvertiseForm() {
  return (
    <section className="px-0 lg:px-16 lg:py-16">
      <div className="px-8 lg:px-16 py-16 bg-nl_sec_background flex flex-col sm:flex-row">
        <div className="flex-1 relative">
          <h2 className="text-2xl w-full text-center sm:text-left sm:w-4/5 lg:w-2/3 mb-10 sm:mb-0 text-nl_background lg:sticky lg:top-28">
            {`Let's talk about how your brand can be seen by 100 thousand people across the globe.`}
          </h2>
        </div>
        <div className="flex-1">
          <form>
            <div className="flex gap-3">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="firstname">
                  First Name
                </Label>
                <Input
                  id="firstname"
                  type="text"
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter name"
                />
              </div>
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
            </div>
            <div className="flex mt-8">
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
            </div>
            <div className="flex mt-8">
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
            <div className="flex mt-8">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="timeline">
                  When are you looking to partner?
                </Label>
                <RadioGroup defaultValue="q3-24" className="flex ">
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="q3-24" id="r1" />
                    <Label htmlFor="r1" className="font-normal">
                      Q3 2024
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="q4-24" id="r2" />
                    <Label htmlFor="r2" className="font-normal">
                      Q4 2024
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="q1 25" id="r3" />
                    <Label htmlFor="r3" className="font-normal">
                      Q1 2025
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="q2 25" id="r3" />
                    <Label htmlFor="r3" className="font-normal">
                      Q2 2025
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="partnership-details">
                  Overall goal of the partnership?
                </Label>
                <Textarea
                  className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Main goal of the partnership"
                  id="partnership-details"
                />
              </div>
            </div>
            <div className="flex mt-8">
              <div className="flex-1">
                <Label className="font-normal" htmlFor="timeline">
                  What is your preferred budget?
                </Label>
                <RadioGroup defaultValue="10-25" className="flex ">
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="10-25" id="r1" />
                    <Label htmlFor="r1" className="font-normal">
                      $10k - $25k
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem className="w-3 h-3" value="25-50" id="r2" />
                    <Label htmlFor="r2" className="font-normal">
                      $25k - $50k
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input">
                    <RadioGroupItem
                      className="w-3 h-3"
                      value="above 50"
                      id="r3"
                    />
                    <Label htmlFor="r3" className="font-normal">
                      $50k+
                    </Label>
                  </div>
                </RadioGroup>
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
