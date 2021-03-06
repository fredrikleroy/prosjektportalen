import IProjectStatusSectionConfig from "./IProjectStatusSectionConfig";

export default interface IProjectStatusProps {
    sectionConfig?: IProjectStatusSectionConfig;
}

export const ProjectStatusDefaultProps: Partial<IProjectStatusProps> = {
    sectionConfig: {
        listTitle: "StatusSections",
        orderBy: "GtStSecOrder",
    },
};
