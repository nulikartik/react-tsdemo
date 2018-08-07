import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { WishCard } from '../../presentationLayers/index';
import { setWishes } from '../../stateManagement/actions/wishActions';
import { CLink, UILoadingSpinner } from '../../ui-fabric/index';
import './Wish.css';

interface IWishProps {
    setWishes: () => void
    wishList: IWish[]
}

class Wish extends React.Component<IWishProps> {

    constructor(props: IWishProps) {
        super(props);
        this.rendWishes = this.rendWishes.bind(this);
    }

    public componentDidMount() {
        console.log("beforeCalling", this.props);
        this.props.setWishes();
        console.log("afterCalling", this.props);
    }

    public componentWillReceiveProps(nextProps: IWishProps) {
        console.log("willReceiveProps", this.props, nextProps);
    }

    public rendWishes() {
        return this.props.wishList.filter(wish => wish.isActive).map((wish: IWish) => {
            return (
                <div className="wishItem" key={wish.id}>
                    <CLink href={"templates/" + wish.id} >
                        <WishCard image={wish.badge_Path} title={wish.name} />
                    </CLink>
                </div>
            );
        });
    }

    public render() {
        return (
            <UILoadingSpinner isLoading={false} >
                <div className="App">
                    {this.rendWishes()}
                </div>
            </UILoadingSpinner>
        );
    }
}

function mapStateToProps(state: IState) {
    return {
        wishList: state.wishes
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ setWishes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wish);