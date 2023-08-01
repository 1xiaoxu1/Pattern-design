/// <reference types="react" />
export interface ButtonProps {
    /**
     * @description 按钮主题
     * @default info
     */
    type?: String;
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    show?: boolean;
    items?: any;
    columns?: any;
    dataSource?: any;
    cell?: any;
}
export interface ButtonStyle {
}
export declare type NativeButtonProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>;
