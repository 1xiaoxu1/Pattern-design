import React from "react";
interface Props {
    value: boolean;
    activeColor: string;
    negativeColor: string;
    activeWord: string;
    negativeWord: string;
    activeWordColor: string;
    changeHandle: Function;
    disable: boolean;
}
declare const _default: ({ value, activeColor, negativeColor, activeWord, negativeWord, activeWordColor, changeHandle, disable }: Props) => React.JSX.Element;
export default _default;
