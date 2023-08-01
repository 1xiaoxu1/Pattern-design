export interface ContainerProps {
    /**
     * @description 容器主题
     * @default primary
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
    /**
    * @description 子节点
    */
    children?: any;
}
export interface ContainerStyle {
    width?: String;
    height?: String;
}
