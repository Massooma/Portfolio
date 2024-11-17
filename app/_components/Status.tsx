import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { LucideIcon, ListTodo, Paintbrush, BadgeDollarSign, ArrowUpRight, Boxes, Gamepad2 } from "lucide-react"; // Assurez-vous que ArrowUpright est bien importé
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-4">
            {/* Section principale */}
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>

            {/* Section secondaire */}
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                                url={work.url}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground"> Contact me</p>
                    <Link href = "https://www.linkedin.com/in/masooma-mukhtar/">
                        <ContactCard name="LinkedIn" image="/images/Mukhtar_Masooma_Photo.jpg" mediumImage="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" description="Dm me!"/>
                    </Link>
                    <Link href = "mailto:mukhtar.masooma@gmail.com">
                        <ContactCard name="E-mail" image="/images/MUKHTAR_Masooma_Photo_2.png" mediumImage="https://download.logo.wine/logo/Gmail/Gmail-Logo.wine.png" description="Send me an email!"/>
                    </Link>
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 object-cover rounded-full" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-2 -right-2 rounded-full object-cover" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className ="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
    );
};

// Liste des projets secondaires
const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo: Paintbrush,
        title: "Paint application",
        description: "An app where you can paint anything.",
        url: "https://github.com/Massooma/ProjectPainterApp",
    },
    {
        Logo: ListTodo,
        title: "Todo List",
        description: "A tool to organize tasks, set priorities, and stay productive.",
        url: "https://github.com/Massooma/POEI_ApplicationGestionDeTache",
    },
    {
        Logo: Boxes,
        title: "Haskell project",
        description: "To generate geometrical images by using functiunal representation of them",
        url: "https://gitlab.com/Massooma/lebon-mukhtar-haskell-project",
    },
    {
        Logo: BadgeDollarSign,
        title: "Financial tracker",
        description: "A platform to track expenses, manage budgets, and monitor your finances.",
        url: "https://github.com/massooma",
    },
    {
        Logo: Gamepad2,
        title: "Hanabi",
        description: "A funny japanese card game",
        url: "/",
    },
];

// Type des propriétés pour SideProject
type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

// Composant SideProject
const SideProject = (props: SideProjectProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQG4gw8glJxVNg/company-logo_200_200/company-logo_200_200/0/1699537012040/contexte_sas_logo?e=1740009600&v=beta&t=553EPHhMen5-euCxDe1Xp2Wlye1KKcPIxn_9jbRY5OQ",
        title: "Contexte",
        role: "Software developer",
        date: "2023",
        url: "https://www.contexte.com",
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQEB4PABK9P_UQ/company-logo_200_200/company-logo_200_200/0/1630628514471/asn_comm_logo?e=1740009600&v=beta&t=6MjueTwK-OHnr8M4bv1BaR350rESLwRv0B9mxw1Pkio",
        title: "Alcatel Submarine Networks",
        role: "Software developer",
        date: "2019-2022",
        url: "https://www.asn.com/"
    }
]

// Type des propriétés pour work
type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

// Composant Work
const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="flex items-center gap-3 hover:bg-accent/50 transition-colors p-2 rounded"
        >
            <img
                src={props.image}
                alt={props.title}
                className="w-12 h-12 object-contain rounded-md"
            />
            <div className="flex flex-1 flex-col min-w-0">
                <p className="text-lg font-semibold truncate">{props.title}</p>
                <p className="text-sm text-muted-foreground truncate">{props.role}</p>
            </div>
            <p className="text-sm text-muted-foreground text-right">{props.date}</p>
        </Link>
    );
};
