import React from "react";
interface Alert {
    isClose?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
    children?: any;
    handleClose?: any;
}
export default function myAlert(props: Alert): React.JSX.Element;
export {};
