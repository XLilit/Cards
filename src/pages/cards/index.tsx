import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import Card from '../card'
import {addCard, deleteAll, sortCards} from "../../store/reducers/cubReducer";
import './style.scss'
import {ICubType} from '../../model/cubReducer.model';

const Cards = () => {


    const dispatch = useAppDispatch()
    const cards = useAppSelector((state) => state.CubReducer.data)
    const getRandomNumber = () => {
        return Math.floor(Date.now() / Math.random() / 10000000000)
    }

    const handleClick = () => {
        const random = getRandomNumber()
        dispatch(addCard(random))
    }
    useEffect(() => {
        handleClick()
        console.log('dfsdfd')
    }, []);
    return (
        <div className='L-cards-wrapper'>
            <div className='L-cards-btn G-flex'>
                <button
                    className='G-button L-card-btn'
                    onClick={handleClick}
                >Add Random Card
                </button>
                <button className='G-button L-sort-btn'
                        onClick={() => dispatch(sortCards())}
                >
                    Sort Cards
                </button>
                <button className='G-button L-del-btn'
                        onClick={() => dispatch(deleteAll())}>
                    Delete ALL
                </button>
            </div>
            <div className='L-cards-content G-flex G-justify-around G-flex-wrap'>
                {cards.map((card: ICubType) => {
                    return <Card
                        card={card}
                        key={card.id}/>
                })}
            </div>
        </div>
    );
};

export default Cards;
