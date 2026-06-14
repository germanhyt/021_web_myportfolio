import Select, { StylesConfig } from "react-select";

const selectOptions = [
  { value: "", label: "Todas las Categorías" },
  { value: "Web", label: "Web Application" },
  { value: "Backend", label: "Backend" },
  { value: "Automation", label: "Automation" },
  { value: "Data Engineering", label: "Data Engineering" },
  { value: "Data Analytics", label: "Data Analytics" },
  { value: "DevOps", label: "DevOps" },
  { value: "Mobile", label: "Mobile Development" },
  { value: "IOT", label: "Internet of Things" },
  { value: "Certification", label: "Certifications" },
];

interface IProps {
  setSelectProject: (value: string) => void;
}

const ProjectsFilter = ({ setSelectProject }: IProps) => {
  const customStyles: StylesConfig<any, false> = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "var(--premium-surface)",
      borderColor: state.isFocused ? "var(--premium-primary)" : "transparent",
      borderRadius: "1.25rem",
      padding: "0.5rem 1rem",
      fontFamily: "'Manrope', sans-serif",
      fontWeight: "700",
      boxShadow: "none",
      "&:hover": {
        borderColor: "var(--premium-primary)",
      },
      transition: "all 0.3s ease",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999, // Super high z-index via Portal
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--premium-surface)",
      borderRadius: "1.25rem",
      border: "1px solid rgba(var(--premium-text-rgb), 0.1)",
      overflow: "hidden",
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected 
        ? "var(--premium-primary)" 
        : state.isFocused 
        ? "rgba(var(--premium-primary-rgb), 0.1)" 
        : "transparent",
      color: state.isSelected ? "white" : "var(--premium-text)",
      cursor: "pointer",
      padding: "14px 24px",
      fontFamily: "'Manrope', sans-serif",
      fontSize: "0.875rem",
      "&:active": {
        backgroundColor: "var(--premium-primary)",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--premium-text)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--premium-text-muted)",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--premium-text-muted)",
      "&:hover": {
        color: "var(--premium-primary)",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="w-full sm:w-[280px]">
      <Select
        defaultValue={selectOptions[0]}
        options={selectOptions}
        onChange={(option: any) => setSelectProject(option.value)}
        styles={customStyles}
        isSearchable={false}
        placeholder="Filtrar por Especialidad"
        classNamePrefix="react-select"
        menuPortalTarget={document.body} // This fixes the z-index issue
      />
    </div>
  );
};

export default ProjectsFilter;
