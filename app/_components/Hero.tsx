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
                <p className="text-base">
                    Experienced in <Code>Python</Code>, <Code>Java</Code>, and <Code>C++/Qt</Code> with
                    a focus on creating reliable software and intuitive interfaces.
                    I am currently learning <Code>React</Code> and <Code>Next.js</Code>. Based in{" "}
                        <Code className="inline-flex items-center gap-1">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/220px-Flag_of_France.svg.png"
                                className="w-4 h-4 rounded-sm"
                                alt="France flag"
                            />{" "}

                        </Code>
                        France, I am looking for an international experience.<br />
                        I love watching animes {" "}
                         <Code className="inline-flex items-center gap-1">
                                <img
                                    /*src = "https://i.pinimg.com/originals/21/4d/2d/214d2d67777a013520421918c1e4a4f5.jpg"*/
                                    /*src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94629f58-f59a-4002-b521-ae8322a061ea/dek9l19-41638857-a8d0-4dcf-8447-47f34e4302ca.png/v1/fill/w_894,h_894,q_70,strp/gojo_chibi_by_anyadesu_dek9l19-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk0NjI5ZjU4LWY1OWEtNDAwMi1iNTIxLWFlODMyMmEwNjFlYVwvZGVrOWwxOS00MTYzODg1Ny1hOGQwLTRkY2YtODQ0Ny00N2YzNGU0MzAyY2EucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kvu81QwA_mm0wIvT_dKXE-HNi52Y2BdKPazNfrap6x4"*/
                                    /*src = "https://cdn.solo.to/user/a/636fc7785f9241_23274370.jpg"*/
                                    src="https://th.bing.com/th/id/OIP.wIoOcwo48kneSLOz8ChGggAAAA?rs=1&pid=ImgDetMain"
                                    className="w-4 h-4 rounded-sm"
                                    alt="France flag"
                                />{" "}
                         </Code> .

                        I love eating Asian food {" "}
                        <Code className="inline-flex items-center gap-1">
                            <span role="img" aria-label="sushi" className="text-sm">🍜</span>{" "}
                        </Code>
                        and spending quality time with my family {" "}
                        <Code className="inline-flex items-center gap-1">
                            <span role="img" aria-label="family" className="text-sm">🏠</span>{" "}
                        </Code>.

                </p>



            </div>

            {/* Profile Picture Section */}
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="https://massooma.github.io/Portfolio/images/Mukhtar_Masooma_Photo.jpg"

                    className="w-60 h-60 object-cover rounded-full mx-auto ml-8 max-md:w-56"
                    alt="Masooma's portrait"
                />
            </div>
        </Section>
    );
};
