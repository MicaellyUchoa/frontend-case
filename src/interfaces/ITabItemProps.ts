export interface ITabItemProps {
    selected?: boolean;
    description: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
