import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn(
                "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm",
                className
            )}
            {...props}
        />
    );
};

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            {/* Introduction Section */}
            <div className="flex-[3] w-full flex flex-col gap-3">
                <h2 className="font-caption font-bold text-5xl text-primary leading-tight">
                    Masooma Mukhtar
                </h2>
                <h3 className="font-caption text-3xl text-muted-foreground">
                    Software Developer
                </h3>
                <p className="text-lg">
                    Experienced in <Code>Python</Code>, <Code>Java</Code>, and <Code>C++/Qt</Code> with
                    a focus on creating reliable software and intuitive interfaces.
                    I am currently learning <Code>React</Code> and <Code>Next.js</Code>. Based in{" "}
                        <Code className="inline-flex items-center gap-1">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/220px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
                                className="w-4 h-4 rounded-sm"
                                alt="France flag"
                            />{" "}

                        </Code>
                        France.
                </p>



            </div>

            {/* Profile Picture Section */}
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="/Portefolio/images/Mukhtar_Masooma_Photo.jpg"
                    className="w-60 h-60 object-cover rounded-full mx-auto ml-8 max-md:w-56"
                    alt="Masooma's portrait"
                />
            </div>
        </Section>
    );
};
