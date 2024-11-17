import { Section } from "./Section";
import {Badge} from "@/components/ui/badge";
export const Skill = () => {

    return <Section className = "flex flex-col gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What I do
        </h2>
    </Section>

}