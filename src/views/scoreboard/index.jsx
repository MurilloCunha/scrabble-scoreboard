import React, { useContext } from 'react'

import Match from '../../context/status'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'
import SearchResult from '../../components/search-result'
import Button from '../../components/button/'
import Modal from '../../components/modal/'

function Scoreboard() {
  const matchPlayers = useContext(Match)

  return (
    <section className='scoreboard'>
      <SearchInput />
      <Table playersList={matchPlayers.all} />
      <Button>Finalizar</Button>
      <Modal>
        <SearchResult result={[{"phonetics":[{"text":"é"}],"phonetic":"é","word":"mesa","origin":"⊙ ETIM do lat. mesae,arum 'id.'","meanings":[{"partOfSpeech":"adjetivo e substantivo de dois gêneros","definitions":[{"antonyms":[],"definition":"arql.vb. relativo a ou indivíduo dos mesas, povo ribeirinho da foz do Indo.","synonyms":[]}]}]},{"phonetics":[{"text":"ê"}],"phonetic":"ê","word":"mesa","origin":"⊙ ETIM lat. mensa,ae 'mesa de comer, iguarias sobre a mesa, mesa dos templos etc.'","meanings":[{"partOfSpeech":"substantivo feminino","definitions":[{"antonyms":[],"definition":"móvel composto de um tampo horizontal, que ger. se destina a fins utilitários: refeições, jogos, escrita, costura, apoio etc.","synonyms":[]},{"antonyms":[],"definition":"conjunto de objetos us. no serviço de uma refeição, e que são colocados sobre a mesa.","synonyms":[],"example":"pôr a m."},{"antonyms":[],"definition":"conjunto de bebidas e alimentos servidos à mesa; passadio.","synonyms":[],"example":"os prazeres da m."},{"antonyms":[],"definition":"conjunto de pessoas ou comensais reunidos à volta da mesa.","synonyms":[],"example":"cada garçom serve quatro m."},{"antonyms":[],"definition":"local, painel, balcão etc. dotado de aparelhagem com que se operam determinados serviços.","synonyms":[],"example":"m. telefônica"},{"antonyms":[],"definition":"parte plana de carros e carroças onde é colocada a carga; tabuleiro.","synonyms":[]},{"antonyms":[],"definition":"comissão diretora de uma assembleia, agremiação ou corporação.","synonyms":[],"example":"eleger a m. da presidência"},{"antonyms":[],"definition":"denominação dada a diversas repartições do serviço alfandegário.","synonyms":[]},{"antonyms":[],"definition":"denominação dada à parte superior plana maior de um brilhante.","synonyms":[]},{"antonyms":[],"definition":"tipo de relevo formado a partir de uma antiga superfície cujos terrenos ao redor foram desgastados por erosão.","synonyms":[]},{"antonyms":[],"definition":"superfície plana e horizontal onde, em máquinas e aparelhos como guilhotina e picotadeira, é colocado o papel.","synonyms":[]},{"antonyms":[],"definition":"em certos jogos de azar, o montante acumulado de apostas em cada rodada.","synonyms":[]},{"antonyms":[],"definition":"conjunto de cartas descartadas sobre a mesa; bagaço.","synonyms":[]},{"antonyms":[],"definition":"sessão de catimbó.","synonyms":[]},{"antonyms":[],"definition":"cerimônia ritualística da macumba.","synonyms":[]}]}]},{"phonetics":[{"text":"ê"}],"phonetic":"ê","word":"mesa","origin":"⊙ ETIM lat.cien. gên. Maesa calcado em maas, nome arábico dessas plantas","meanings":[{"partOfSpeech":"substantivo feminino","definitions":[{"antonyms":[],"definition":"design. comum às plantas do gên. Maesa, da fam. das mirsináceas, que reúne 100 spp., nativas de regiões tropicais da África e Ásia até o Japão e a Austrália; algumas são cultivadas como ornamentais ou para fins medicinais.","synonyms":[]}]}]}]}/>
        </Modal>
    </section>

  )
}

export default Scoreboard
