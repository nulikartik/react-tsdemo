import * as React from 'react';
import { connect } from 'react-redux';
import { match } from "react-router";
import { bindActionCreators } from "redux";
import { TemplateCard } from '../../presentationLayers/index';
import { setSelectedWish } from '../../stateManagement/actions/selectedWish';
import { setTemplates } from '../../stateManagement/actions/templateActions';
import { CLink } from '../../ui-fabric/index';
import './Template.css';


interface IRouteParams {
    wishSlug: string;
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
        this.props.setSelectedWish(Number(this.props.match.params.wishSlug));
    }

    public componentDidMount() {
        this.props.setTemplates(Number(this.props.match.params.wishSlug));
    }

    public rendTemplates() {
        return this.props.templateList.map((template: ITemplate) => {
            return (
                <CLink href={ "/wish/create?template=" + template.id } key={template.id} >
                    <TemplateCard title={template.name} image={template.slug} />
                </CLink>
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