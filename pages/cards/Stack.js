import React from 'react'
import { stackObjOne, stackObjTwo} from './CardsData'
import { InfoSection } from '../../components/Index';
import Footer from '../../components/Footer/Footer';
import YoutubeEmbed from '../../components/YoutubeEmbed'
const Stack = () => {
    return (
        <>
            <InfoSection {...stackObjOne} />
            <h1>Discover Stack</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
            <Footer />
        </>
    )
}

export default Stack
