import React from 'react'
import InfoContainer from '../../components/info-container/'
import Button from '../../components/button/'

function Home() {
    return (
        <section className="home">
        <InfoContainer>
          <h2 class="content__title">Acompanhe sua pontuação!</h2>
          <ul>
              <li>Crie um novo jogo</li>
              <li>Insira os nomes dos jogadores</li>
              <li>Marque os pontos</li>
              <li>Faça consultas ao dicionário</li>
              <li>Descubra quem venceu!</li>
          </ul>
        </InfoContainer>
        <Button>Novo Jogo</Button>
        </section>
    )
}

export default Home
