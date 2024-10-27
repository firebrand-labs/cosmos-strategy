import { FC } from "react";
import Image from "next/image";
import { valueEngineContent } from "@/config/marketing";
import { cn } from "@/lib/utils";
import OurBelieve from "@/app/_components/our-belief";
import DotAnimation from "@/app/_components/dot-animation";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 ">
        <div className="container flex items-center justify-center">
          <div className="container relative w-full h-full flex flex-col items-center justify-center z-[10]">
            <h1 className="text-secondary_heading text-center font-heading text-primary-foreground mb-2 leading-tight">
              Cosmos
            </h1>
            <p className="text-foreground mb-4 leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              /ˈkɒzmɒs/ . Noun <br />
              An order that’s fluid & dynamic held together harmoniously by
              invisible laws or universal insights
            </p>
            <p className="text-foreground leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              An order that symbolises the hope of light in void or darkness
            </p>
            <DotAnimation />
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 ">
        <div className="container flex items-center justify-center relative">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-secondary_heading text-primary-foreground font-heading">
                  Who are we?
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading font-paragraph leading-loose text-foreground">
                Operating contexts that are complex, or represent
                discontinuities, or have a history of failure. Across
                industries, & geographies categories, & domains.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-full"
                src="https://utfs.io/f/ZowmNmBHF7rVn9xfodbEDNIHoOZs906z1pPhXFwkyAuiWTxR"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Believe Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 ">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-0">
            <h2 className="flex items-start justify-start flex-col">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
                Our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
                Beliefs
              </span>
            </h2>
            <OurBelieve className="col-span-2" />
          </div>
        </div>
      </section>

      {/* Our Values Engine Section */}
      <section className="w-screen flex items-center justify-center min-h-screen bg-background py-10 flex-col">
        <div className="container flex items-center justify-center mb-16">
          <div className="container w-full h-full flex flex-col items-center justify-center ">
            <h2 className="flex items-center justify-center flex-col">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
                Our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
                Values Engine
              </span>
            </h2>
            <p className="text-foreground mb-4 leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              Our values engine ensures that our outcomes are transformative to
              our clients.
            </p>
            <p className="text-foreground leading-10 text-center mt-4 md:mt-8 font-heading text-tertiary_heading">
              Depth, Empathy, Holism, Practice, Collaboration, Joy
            </p>
          </div>
        </div>
        <div className="container">
          <div className="min-w-full max-w-6xl p-8 md:p-12 border border-foreground">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 relative ">
              {valueEngineContent.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center list-none text-foreground"
                >
                  <span
                    className={cn(
                      "inline-flex items-center justify-center px-6 py-2 bg-secondary-foreground text-foreground font-paragraph text-extra_paragraph_heading min-w-[300px] md:min-w-[400px] relative",
                      i % 2 === 0
                        ? "before:md:content-[''] before:w-2/3 before:h-[1px] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[100%] before:bg-foreground"
                        : ""
                    )}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-foreground leading-10 text-center mt-4 md:mt-8 font-heading text-tertiary_heading">
            Depth, Empathy, Holism, Practice, Collaboration, Joy
          </p>
        </div>
      </section>
    </>
  );
};

export default page;

// odd:before:'' odd:before:w-1/3 h-[1px] odd:before:absolute odd:before:top-[50%] odd:before:translate-y-[-50%] odd:before:left-[50%]