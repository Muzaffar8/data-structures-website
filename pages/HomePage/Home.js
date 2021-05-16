import React from 'react'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import { InfoSection } from '../../components/Index';
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer';
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Footer />
        </>
    )
}

export default Home
