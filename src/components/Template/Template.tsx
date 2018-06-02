import * as React from 'react';
import { connect } from 'react-redux';
import { match } from "react-router";
import { bindActionCreators } from "redux";
import { setSelectedWish } from '../../stateManagement/actions/selectedWish';
import { setTemplates } from '../../stateManagement/actions/templateActions';
import './Template.css';

interface IRouteParams {
    wishslug: string;
}

interface ITemplateProps {
    setTemplates: (wishId: number) => void;
    setSelectedWish: (wishId: number) => void;
    selectedWish: IWish;
    templateList: ITemplate[];
    match: match<IRouteParams>
}

class Template extends React.Component<ITemplateProps> {
    constructor(props: ITemplateProps) {
        super(props);
        console.log(props);
        this.rendTemplates = this.rendTemplates.bind(this);
    }

    public componentWillMount() {
        this.props.setSelectedWish(Number(this.props.match.params.wishslug));
    }

    public componentDidMount() {
        this.props.setTemplates(Number(this.props.match.params.wishslug));
    }

    public rendTemplates() {
        return this.props.templateList.map((template: ITemplate) => {
            return (
                <div className="templateItem" key={template.id}>
                    {/* <img src={template.badge_Path} /> */}
                    {template.name}
                </div>
            );
        });
    }

    public render() {
        return (
            <div className="App">
                {this.props.selectedWish?this.props.selectedWish.name:null}
                {this.rendTemplates()}
            </div>
        );
    }
}

function mapStateToProps(state: IState) {
    return {
        selectedWish: state.selectedWish,
        templateList: state.templates
    }
}

function mapDispatchToProps(dispatch: any ) {
    return bindActionCreators({ setSelectedWish, setTemplates }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);