
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ['One Punch', 'Samurai X', 'Drangon Ball'];
    const [categories, setCategories] = useState(['Olivia Dunham' ]);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    //     //setCategories(cats => [ ...cats, 'HunterXHunter' ]);
    // }
    
    return (
         <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategories = { setCategories } />

            <ol>
                 { 
                    categories.map(  category => 
                         <GifGrid 
                            key = { category }
                            category={ category } 
                        />
                    )
                 }
            </ol>
         </>
    )
}
