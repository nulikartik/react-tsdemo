import { Card } from 'antd';
import * as React from 'react';
const { Meta } = Card;
import './index.css';

interface ICardProps {
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  style?: IStyle;
}

interface IStyle {
  width: number;
}

class UICard extends React.Component<ICardProps> {

  constructor(props: ICardProps) {
    super(props);
  }

  public rendCard() {
    if (this.props.image) {
      return (<Card
        hoverable={true}
        cover={<img alt={this.props.alt} src={this.props.image} />}
      >
        <Meta
          title={this.props.title}
          description={this.props.description}
        />
      </Card>);
    }
    else if (this.props.title && this.props.title.length > 0) {
      return ( <Card title={this.props.title} bordered={false} style={{ width: 300 }}>
        {this.props.children}
      </Card> );
    }
    else {
      return <div />
    }
  }

  public render() {
    return (
      <div className="UICard">
        {this.rendCard()}
      </div>
    );
  }
}

export default UICard;
