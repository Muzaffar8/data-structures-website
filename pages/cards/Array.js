import React from 'react'
import { stackObjFour, stackObjNine, stackObjThree,} from './CardsData'
import { InfoSection } from '../../components/Index';
import Footer from '../../components/Footer/Footer';
import YoutubeEmbed from '../../components/YoutubeEmbed'
const Array = () => {
    return (
        <>
            <InfoSection {...stackObjNine} />

            <h1>Watch it to learn more</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
            <Footer />
        </>
    )
}

export default Array
