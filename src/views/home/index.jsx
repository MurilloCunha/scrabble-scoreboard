import React from 'react'
import { Link } from 'react-router-dom'

import InfoContainer from '../../components/info-container/'
import Button from '../../components/button/'

function Home() {
    return (
        <section className="home">
        <InfoContainer>
          <h2 className="content__title">Acompanhe sua pontuação!</h2>
          <ul>
              <li>Crie um novo jogo</li>
              <li>Insira os nomes dos jogadores</li>
              <li>Marque os pontos</li>
              <li>Faça consultas ao dicionário</li>
              <li>Descubra quem venceu!</li>
          </ul>
        </InfoContainer>
        <Link to={"/players-setup"}>
            <Button>Novo Jogo</Button>
        </Link>
        
        </section>
    )
}

export default Home
