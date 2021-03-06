import { IDialogProps } from "office-ui-fabric-react/lib/Dialog";

interface INewProjectDialogProps {
    dialogProps?: IDialogProps;
    advancedSectionClassName?: string;
    titleMinLength?: number;
    titleMaxLength?: number;
    autoGenerate: boolean;
}

export default INewProjectDialogProps;
