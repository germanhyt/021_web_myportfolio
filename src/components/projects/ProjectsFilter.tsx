import Select, { StylesConfig } from "react-select";

const selectOptions = [
  { value: "", label: "Todas las categorías" },
  { value: "Fullstack web", label: "Fullstack web" },
  { value: "Landing page", label: "Landing page" },
  { value: "Website", label: "Website" },
  { value: "Data Engineering", label: "Data Engineering" },
  { value: "Data Analytics", label: "Data Analytics" },
];

interface IProps {
  setSelectProject: (value: string) => void;
}

const ProjectsFilter = ({ setSelectProject }: IProps) => {
  // Keep dropdown under the fixed header (z-50 / 80px) so it never covers the nav.
  const customStyles: StylesConfig<{ value: string; label: string }, false> = {
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
      zIndex: 40,
      paddingTop: "0.25rem",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--premium-surface)",
      borderRadius: "1.25rem",
      border: "1px solid rgba(var(--premium-primary-rgb), 0.2)",
      overflow: "hidden",
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
      marginTop: 8,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--premium-primary)"
        : state.isFocused
          ? "rgba(var(--premium-primary-rgb), 0.12)"
          : "transparent",
      color: state.isSelected ? "var(--premium-bg)" : "var(--premium-text)",
      cursor: "pointer",
      padding: "14px 24px",
      fontFamily: "'Manrope', sans-serif",
      fontSize: "0.875rem",
      fontWeight: state.isSelected ? 700 : 500,
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
        onChange={(option) => setSelectProject(option?.value ?? "")}
        styles={customStyles}
        isSearchable={false}
        placeholder="Filtrar por categoría"
        classNamePrefix="react-select"
        menuPortalTarget={document.body}
        menuPlacement="auto"
        menuShouldScrollIntoView
      />
    </div>
  );
};

export default ProjectsFilter;
