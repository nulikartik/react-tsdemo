import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { WishCard } from '../../presentationLayers/index'; 
import { setWishes } from '../../stateManagement/actions/wishActions';
import { CLink } from '../../ui-fabric/index';
import './Wish.css';

interface IWishState {
    wishList: IWish[]
}
interface IWishProps {
    setWishes: () => void
    wishList: IWish[]
}

class Wish extends React.Component<IWishProps, IWishState> {

    constructor(props: IWishProps) {
        super(props);
        this.rendWishes = this.rendWishes.bind(this);
    }

    public componentDidMount() {
        this.props.setWishes();
    }

    public rendWishes() {
        return this.props.wishList.filter(wish => wish.isActive).map((wish: IWish) => {
            return (
                <CLink key={wish.id} href={ "templates/"+wish.id } >
                    <WishCard image={wish.badge_Path} title={wish.name} />
                </CLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Wish);