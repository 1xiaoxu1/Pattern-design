import React from "react";
interface Props {
    totalScore: number;
    score: number;
    text: boolean;
    children: string;
    readonly: boolean;
}
declare const Rate: ({ totalScore, score, text, children, readonly }: Props) => React.JSX.Element;
export default Rate;
