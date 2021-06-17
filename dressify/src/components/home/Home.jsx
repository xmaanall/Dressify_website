import React from 'react'
import Carousels from '../home/Carousels';
import {ItemList} from '../home/ItemList';
import ItemCard from '../home/ItemCard';
import LastestItems from '../home/LastestItems';
import LastBanner from '../home/LastBanner';


export default function Home() {
    return (
        <div>
           
            <Carousels />
            <ItemList />
            <LastestItems />
             <ItemCard />
             <LastBanner/>

        </div>
    )
}

