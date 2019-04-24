export interface MultiPickerOption {
    text?: string;
    value?: any;
    parentVal?: any;
}
export interface MultiPickerColumn {
    name?: string;
    parentCol?: string;
    alias?: string;
    options?: MultiPickerOption[];
}
