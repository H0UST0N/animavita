import Button from '../Button';
import {
    Content,
} from "./styles";
import { ImFirst, ImBackward2, ImForward3, ImLast } from "react-icons/im";

interface IProps {
    onClickFirst?: (e: any) => void;
    onClickPrev?: (e: any) => void;
    onClickNext?: (e: any) => void;
    onClickLast?: (e: any) => void;
}
export default function Pagination(
    {
        onClickFirst,
        onClickPrev,
        onClickNext,
        onClickLast
    }: IProps
) {

    return (
        <Content>
            <Button type={'button'} onClick={onClickFirst}>
                <ImFirst />
            </Button>
            <Button type={'button'} onClick={onClickPrev}>
                <ImBackward2 />
            </Button>
            <Button type={'button'} onClick={onClickNext}>
                <ImForward3 />
            </Button>
            <Button type={'button'} onClick={onClickLast}>
                <ImLast />
            </Button>
        </Content>
    );

};
