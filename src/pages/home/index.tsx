import React, { useEffect, useState } from "react";

import Card from "../../components/general/Card";
import Characters, { IGetCharacters } from "../../services/api/Characters";
import { Container, Content, HomeHeader } from "./styles";
import GenericDAO from "../../services/api/GenericDAO";
import Pagination from "../../components/general/Pagination";
import Header from "../../components/layout/Header";
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'

export default function Home() {
    const [list, setList] = useState<IGetCharacters>({} as IGetCharacters);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const fetchData = async (filters?: any[]) => {
        setDataIsLoaded(false);
        const response: IGetCharacters = await Characters.get(filters);
        setList(response);
        setDataIsLoaded(true);
    };


    const firstPage = async () => {
        if (list.links.first) {
            setDataIsLoaded(false);
            await GenericDAO.getFullRoute(list.links.first).then((response) => {
                setList(response);
            });
            setDataIsLoaded(true);
        }
    };
    const prevPage = async () => {
        if (list.links.prev) {
            setDataIsLoaded(false);
            await GenericDAO.getFullRoute(list.links.prev).then((response) => {
                setList(response);
            });
            setDataIsLoaded(true);
        }
    };
    const nextPage = async () => {
        if (list.links.next) {
            setDataIsLoaded(false);
            await GenericDAO.getFullRoute(list.links.next).then((response) => {
                setList(response);
            });
            setDataIsLoaded(true);
        }
    };
    const lastPage = async () => {
        if (list.links.last) {
            setDataIsLoaded(false);
            await GenericDAO.getFullRoute(list.links.last).then((response) => {
                setList(response);
            });
            setDataIsLoaded(true);
        }
    };


    useEffect(() => {
        (async () => {
            try {
                await fetchData([{ name: 'page[limit]', value: '4' }]);
            } catch (e: any) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            <Header
                placeholder={"Search for characters"}
                nome={"characters"}
                onChange={async (e) => {
                    e.target.value
                        ? await fetchData([{ name: 'page[limit]', value: '4' }, { name: 'filter[name]', value: e.target.value }])
                        : await fetchData([{ name: 'page[limit]', value: '4' }])
                }}
            />
            {dataIsLoaded
                ? <Content>
                    <HomeHeader>
                        Characters ({list.meta.count})
                    </HomeHeader>
                    <Container>
                        {list?.data?.length > 0 &&
                            list?.data.map((item) => {
                                return <Card key={item.id} id={item.id} imageUrl={item.attributes?.image?.original} canonicalName={item.attributes?.canonicalName} description={item.attributes?.description} otherNames={item.attributes?.otherNames} />
                            })
                        }
                    </Container>
                </Content>
                : <Content>
                    <HalfMalf text={"Carregando..."} bgColor={"#ffffff"} center={true} width={"150px"} height={"150px"} />
                </Content>
            }
            <Pagination onClickFirst={firstPage} onClickLast={lastPage} onClickNext={nextPage} onClickPrev={prevPage} />
        </>
    );
}
