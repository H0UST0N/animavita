import { CSSProperties } from "react";
import {
    ButtonSC
} from "./styles";

interface ButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    children: any;
    style?: CSSProperties;
    onClick?: (e: any) => void;
};


const Button = ({ type, children, onClick,style }: ButtonProps) => {
    return (
        <ButtonSC type={type} onClick={onClick} style={style}>{children}</ButtonSC>
    );
}

export default Button;