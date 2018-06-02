import * as React from 'react';
import './WishCard.css';

interface IWishCardProps {
    image: string;
    title: string;
}

class WishCard extends React.Component<IWishCardProps> {

    constructor(props: IWishCardProps) {
        super(props);
    }

    public render() {
        return (
            <div className="WishCard">
                <img src={this.props.image} />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export const wishCard = WishCard;