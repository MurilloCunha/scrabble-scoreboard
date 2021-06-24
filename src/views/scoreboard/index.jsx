import React from 'react'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'

function Scoreboard({playersList}) {
    return (
        <section className='scoreboard'>
            <Table playersList={playersList}/>
            <SearchInput />
        </section>
        
    )
}

export default Scoreboard
