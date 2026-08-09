import { useState, createContext } from "react";
import { projectsData } from "@/core/data/projects";
import { IProject } from "@/core/types/project";

// Create projects context
export const ProjectsContext = createContext<{
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  searchProject: string;
  setSearchProject: React.Dispatch<React.SetStateAction<string>>;
  searchProjectsByTitle: IProject[];
  selectProject: string | null;
  setSelectProject: React.Dispatch<React.SetStateAction<string | null>>;
  selectProjectsByCategory: IProject[];
  idProject: number | undefined;
}>({
  projects: [],
  setProjects: () => {},
  searchProject: "",
  setSearchProject: () => {},
  searchProjectsByTitle: [],
  selectProject: null,
  setSelectProject: () => {},
  selectProjectsByCategory: [],
  idProject: undefined,
});

interface IProps {
  children: React.ReactNode;
  idProject?: number;
}

// Create the projects context provider
export const ProjectsProvider = (props: IProps) => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState<string | null>(null);

  const { idProject } = props;

  // Search projects by project title
  const searchProjectsByTitle = projects.filter((item) => {
    const searchableContent = [
      item.title,
      item.category,
      item.ProjectHeader.tags,
      item.ProjectInfo.Technologies.flatMap((technology) => technology.techs).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return searchProject === ""
      ? item
      : searchableContent.includes(searchProject.toLowerCase());
  });

  // Select projects by exact category label
  const selectProjectsByCategory = projects.filter((item) => {
    if (!selectProject) return true;
    return item.category.toLowerCase() === selectProject.toLowerCase();
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
        idProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
