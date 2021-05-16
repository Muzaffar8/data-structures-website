import React from 'react'
import { stackObjFour, stackObjSeven, stackObjThree,} from './CardsData'
import { InfoSection } from '../../components/Index';
import Footer from '../../components/Footer/Footer';
import YoutubeEmbed from '../../components/YoutubeEmbed'
const Sort = () => {
    return (
        <>
            <InfoSection {...stackObjSeven} />
            <h1>Watch it to learn more</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
            <Footer />
        </>
    )
}

export default Sort