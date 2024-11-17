import {Section} from "./Section";
import {Badge} from "@/components/ui/badge";
import {PythonIcon} from "./icons/PythonIcon";
import {JavaIcon} from "./icons/JavaIcon";
import {QtIcon} from "./icons/QtIcon";

export const Skills = () => {

    return <Section className = "flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            My skills...
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2">
                <JavaIcon size={42} />

              <h3 className="text-2xl font-semibold tracking-tight">JAVA</h3>
              <p className="text-sm text-muted-foreground">
                My Java expertise includes developing tools for optical systems in a R&D team, creating equipment
                drivers, and automating test bench configurations. I have learnt the
                 ability to deliver effective software solutions.            </p>
            </div>

            <div className="flex flex-col gap-2">
                  <QtIcon size={42} />

                <h3 className="text-2xl font-semibold tracking-tight">Qt/C++</h3>
                <p className="text-sm text-muted-foreground">
                I can build modern interfaces and robust desktop applications.
                I have migrated a VBA project to Qt/C++, created tools like
                financial trackers and task managers, prioritizing intuitive design and reliability.
                </p>
            </div>

                    <div className="flex flex-col gap-2">
                        <PythonIcon size={42} className="animate-spin" style={{animationDuration:"10s",}} />

                      <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
                      <p className="text-sm text-muted-foreground">
                     I have solid experience in Python, focusing on automating tasks, benchmarking,
                     video transcription, and cloud data management with GCP and AWS. My work
                     emphasizes processing complex datasets.
                      </p>
                  </div>
        </div>


    </Section>

}

