import * as React from 'react';
import './TemplateCard.css';

interface ITemplateCardProps {
    image: string;
    title: string;
}

class TemplateCard extends React.Component<ITemplateCardProps> {

    constructor(props: ITemplateCardProps) {
        super(props);
    }

    public render() {
        return (
            <div className="TemplateCard">
                <img src={this.props.image} />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export const templateCard = TemplateCard;