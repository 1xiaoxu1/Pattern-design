import React from 'react';
import './message.css';
/**
 * 1.点击出现弹框
 * 2.点击X弹框消失
 * */
interface MessageProps {
    /**
     * @description 鼠标点击时触发事件
     */
    onClick?: Function;
    /**
     * @description 信息提示窗的内容
     */
    children?: string | number;
    /**
    * @description 定义的类名
    */
    className?: string;
    delay?: number;
    title?: string | number;
}
declare const Message: React.FC<MessageProps>;
export default Message;
