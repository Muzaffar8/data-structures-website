import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>CHOOSE YOUR TOPIC TO STUDY</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/sorting.png"
                        text="Learn how to sort"
                        label="SORTING"
                        path="/sort"
                        />

<CardItem 
                        src="images/stack.png"
                        text="Study how stack works"
                        label="STACK"
                        path="/stack"
                        />

                        
                    </ul>

<CardItem 
                        src="images/trees.png"
                        text="TREES"
                        label="How to better understand trees"
                        path="/trees"
                        />

<CardItem 
                        src="images/array.jpg"
                        text="Arrays"
                        label="ARRAYS"
                        path="/array"
                        />
                        <CardItem 
                        src="images/queue.jpg"
                        text="Queues & Dequeues"
                        label="QUEUES"
                        path="/queue"
                        />

                        
                    
                </div>

            </div>
            
        </div>
    )
}

export default Cards
