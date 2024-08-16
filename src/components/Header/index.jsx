import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/138873868?s=400&u=ed9b84f35ed18f1c22fe306685ef87a671133d0f&v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                 <a href='/Login'>   <Button title="Entrar" /></a>
                <a href='/Cadastro'><Button title="Cadastrar"/></a>
               
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
