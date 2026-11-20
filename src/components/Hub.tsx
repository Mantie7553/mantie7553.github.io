import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";

type ProjectSummary = { id: string; title: string; summary: string; stack: string[]; status: "done" | "in-progress" | "paused" };
type Props = { projects: ProjectSummary[] };

const navItems = [
    {display: "Projects", path: "/#projects", opensPanel: true},
    {display: "About", path: "/about"}, 
    {display: "Resume", path: "/Jaden-Mantie-Resume.pdf"}, 
    {display: "Contact", path: "/contact"}
];


export default function Hub({ projects }: Props) {
    const [area, setArea] = useState<"menu" | "projects">("menu");
    const [menuIndex, setMenuIndex] = useState(0);
    const [projectIndex, setProjectIndex] = useState(0);
    const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const interacted = useRef(false);

    useEffect(() => {
        if (interacted.current === false) return;
        const el = area === "menu"
            ? menuRefs.current[menuIndex]
            : projectRefs.current[projectIndex];
        el?.focus();
    }, [area, menuIndex, projectIndex]);

    function selectMenu(index: number) {
        setArea("menu");
        setMenuIndex(index);
    }

    function selectProject(index: number) {
        setArea("projects");
        setProjectIndex(index);
    }

    function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
        interacted.current = true;
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                if (area === "menu") {
                    setMenuIndex((i) => (i + 1) % navItems.length);
                } else {
                    setProjectIndex((i) => (i + 1) % projects.length);
                }
                break;
            case "ArrowUp":
                e.preventDefault();
                if (area === "menu") {
                    setMenuIndex((i) => (i - 1 + navItems.length) % navItems.length);
                } else {
                    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
                }
                break;
            case "ArrowRight": 
                e.preventDefault();
                if (area === "menu") {
                    setArea("projects");
                }
                break;
            case "Escape":
            case "ArrowLeft": 
                e.preventDefault();
                if (area === "projects") {
                    setArea("menu");
                }
                break;
        }
    }

    function onMenuClick(e: MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[number]) {
        if (!item.opensPanel) return;
        e.preventDefault();
        interacted.current = true;
        setArea("projects");
    }

    return <div className="hub-inner" onKeyDown={onKeyDown}>
        <nav aria-label="Main" className="nav">
            {navItems.map((item, index) => {
                const selected = area === "menu" && index === menuIndex;
                return (
                    <a
                      className={selected ? "pill is-selected" : "pill"}
                      href={item.path}
                      key={item.display}
                      ref={(el) => { menuRefs.current[index] = el; }}
                      onFocus={() => selectMenu(index)}
                      onMouseEnter={() => selectMenu(index)}
                      onClick={(e) => onMenuClick(e, item)}
                    >
                        {item.display}
                    </a>
                );
            })}
		</nav>

		<section id="projects" className="panel">
			<h2>Projects</h2>
			<hr/>
			{projects.map((project: ProjectSummary, index) => {
                const selected = area === "projects" && index === projectIndex;
                const expanded = index === projectIndex;
                return (
                    <a 
                      className={selected ? "project-row is-selected": "project-row"} 
                      href={`/projects/${project.id}`} 
                      key={project.id}
                      ref={(el) => { projectRefs.current[index] = el; }}
                      onFocus={() => selectProject(index)}
                      onMouseEnter={() => selectProject(index)}
                    >
                        <h3>{project.title}</h3>
                        <p className="status">{project.status}</p>
                        { expanded && (
                            <>
                                <ul className="stack">
                                    {project.stack.map((i: string) => (
                                        <li key={`${project.id}_${i}`}>{i}</li>
                                    ))}
                                </ul>
                                <p className="summary">{project.summary}</p>
                            </>
                        )}
                    </a>
                );
            })}
		</section>
    </div>
}