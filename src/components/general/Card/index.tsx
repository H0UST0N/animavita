import Image from 'next/image';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from 'react';
import { Collapsible } from 'collapsible-react-component';
import 'collapsible-react-component/dist/index.css';

import Button from '../Button';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardOptionsNoteSmall,
    CardOptionsNote,
} from "./styles";
import person from '../../../assets/img/person.jpeg';

interface IProps {
    id: string;
    imageUrl: string;
    canonicalName: string;
    description: string;
    otherNames: string[];
}
export default function Card(
    {
        id,
        imageUrl,
        canonicalName,
        description,
        otherNames
    }: IProps
) {
    const [openDescription, setOpenDescription] = useState(false);

    return (
        <CardWrapper>
            <CardHeader>
                #{id}
            </CardHeader>
            <Image src={imageUrl ? imageUrl : person} width={100} height={150} />
            <CardHeading>
                {canonicalName}
            </CardHeading>
            <CardOptionsNote>
                <Button
                    style={{ width: '100%', justifyContent: 'center', color: '#fca311', backgroundColor: '#14213d', fontWeight: 'bold' }}
                    type={'button'}
                    onClick={() => {
                        setOpenDescription(!openDescription)
                    }}
                >
                    {'Description'}&nbsp;&nbsp;{openDescription ? <AiFillCaretUp /> : <AiFillCaretDown />}
                </Button>
            </CardOptionsNote>

            <Collapsible open={openDescription}>
                {description ? description : 'No description registered'}
            </Collapsible>
            <CardBody>
                {otherNames.length > 0
                    && otherNames.map(
                        (item) => {
                            return <CardOptionsNoteSmall key={item}>{item}</CardOptionsNoteSmall>;
                        }
                    )
                }
            </CardBody>

        </CardWrapper>
    );

};
