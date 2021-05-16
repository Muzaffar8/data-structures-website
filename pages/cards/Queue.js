import React from 'react'
import { stackObjFour, stackObjThree,} from './CardsData'
import { InfoSection } from '../../components/Index';
import Footer from '../../components/Footer/Footer';
import YoutubeEmbed from '../../components/YoutubeEmbed'
const Queue = () => {
    return (
        <>
            <InfoSection {...stackObjThree} />
            <h1>Watch it to learn more</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
            <Footer />
        </>
    )
}

export default Queue