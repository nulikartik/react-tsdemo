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
        );
    }
}

export default WishCard;