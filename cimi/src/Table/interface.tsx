export interface TableProps {
  //自定义Table接口
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
  columns?: any
  dataSource?: any;
  cell?: any;


}
export interface TableStyle {
  //Table样式接口



}
export type NativeTableProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
