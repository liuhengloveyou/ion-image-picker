import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
export declare class IonImagePicker implements ComponentInterface {
    constructor();
    private fileEl?;
    /**
     * If `true`, the user cannot interact with the datetime.
     */
    disabled: boolean;
    /**
     * If `true`, the datetime appears normal but is not interactive.
     */
    readonly: boolean;
    protected disabledChanged(): void;
    /**
    * 最多显示多少张图片
    */
    max: number;
    value?: string[];
    protected valueChanged(): void;
    /**
     * Emitted when the value has changed.
     */
    ionChange: EventEmitter<any>;
    componentWillLoad(): void;
    onClick(): void;
    /**
     * Opens the datetime overlay.
     */
    open(): Promise<void>;
    handleFiles(e: any): void;
    private emitStyle;
    render(): JSX.Element[];
}
