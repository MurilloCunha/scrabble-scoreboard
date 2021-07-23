import React from 'react'
import { Link } from 'react-router-dom'

import InfoContainer from '../../components/info-container/'
import Button from '../../components/button/'

function Home() {
    return (
        <main className="home">
        <InfoContainer>
        <svg style={{ fill:'#f8e35a'}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 0c0 9.803 5.105 12.053 5.604 16h2.805c.497-3.947 5.591-6.197 5.591-16h-14zm7.006 14.62c-.408-.998-.969-1.959-1.548-2.953-1.422-2.438-3.011-5.162-3.379-9.667h9.842c-.368 4.506-1.953 7.23-3.372 9.669-.577.993-1.136 1.954-1.543 2.951zm-.006-3.073c-1.125-2.563-1.849-5.599-1.857-8.547h-1.383c.374 3.118 1.857 7.023 3.24 8.547zm12-9.547c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm13.438 15h-2.866c-.202 1.187-1.63 2.619-3.571 2.619v4.381h10v-4.381c-1.999 0-3.371-1.432-3.563-2.619zm2.562 6h-8v-2h8v2z"/></svg>
        <div>
            <h2>Marque a pontuação</h2>
            <p>descubra quem venceu com<br/> apenas um clique!</p>
        </div>
        </InfoContainer>
        <InfoContainer>
        <svg style={{ fill:'#f8e35a'}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
        <div>
            <h2>Consulte o dicionário!</h2>
            <p>Conteste as palavras de seus <br /> adversários!</p>
        </div>
        </InfoContainer>
        <Link to={"/players-setup"}>
            <Button>Novo Jogo</Button>
        </Link>
        
        </main>
    )
}

export default Home
