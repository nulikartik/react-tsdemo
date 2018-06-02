import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setWishes } from '../../actions/wishActions';
import './Wish.css';

interface ITemplateState {
    wishList: IWish[]
}
interface IWishProps {
    setWishes: () => void
    wishList: IWish[]
}

class Template extends React.Component<IWishProps, ITemplateState> {

    constructor(props: IWishProps) {
        super(props);
        this.rendWishes = this.rendWishes.bind(this);
    }

    public componentDidMount() {
        this.props.setWishes();
    }

    public rendWishes() {
        return this.props.wishList.map((wish: IWish) => {
            return (
                <div className="wishItem" key={wish.id}>
                    <img src={wish.badge_Path} />
                    {wish.name}
                </div>
            );
        });
    }

    public render() {
        return (
            <div className="App">
                {this.rendWishes()}
            </div>
        );
    }
}

function mapStateToProps(state: IState) {
    return {
        wishList: state.wishes
    }
}

function mapDispatchToProps(dispatch: any ) {
    return bindActionCreators({ setWishes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);