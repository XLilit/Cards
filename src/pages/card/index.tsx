import React from 'react';
import {ICubType} from "../../model/cubReducer.model";
import './style.scss'
import {useAppDispatch} from "../../hooks";
import {deleteCard} from "../../store/reducers/cubReducer";
interface ICardProps {
    card: ICubType
}

const Card = ({card}: ICardProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className='L-card'>
            <p>{card.num}</p>
            <button
                className='L-card-delete-btn'
                onClick={() => dispatch(deleteCard(card.id))}
            >&times;</button>
        </div>
    );
};

export default Card;
