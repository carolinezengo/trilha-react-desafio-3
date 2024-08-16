import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Caroline Zengo" image="https://avatars.githubusercontent.com/u/138873868?s=400&u=ed9b84f35ed18f1c22fe306685ef87a671133d0f&v=4" percentual={25}/>
                <UserInfo nome="Caroline Zengo" image="https://avatars.githubusercontent.com/u/138873868?s=400&u=ed9b84f35ed18f1c22fe306685ef87a671133d0f&v=4" percentual={65}/>
                <UserInfo nome="Caroline Zengo" image="https://avatars.githubusercontent.com/u/138873868?s=400&u=ed9b84f35ed18f1c22fe306685ef87a671133d0f&v=4" percentual={45}/>
                <UserInfo nome="Caroline Zengo" image="https://avatars.githubusercontent.com/u/138873868?s=400&u=ed9b84f35ed18f1c22fe306685ef87a671133d0f&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
