import * as React from 'react';
import { UICard } from '../../ui-fabric/index';
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
                <UICard image={this.props.image} title={this.props.title} alt={this.props.title} />
            </div>
            // <div className="WishCard">
            //     <img src={this.props.image} />
            //     <span>{this.props.title}</span>
            // </div>
        );
    }
}

export default WishCard;