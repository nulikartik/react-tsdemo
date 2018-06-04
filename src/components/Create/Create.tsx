import * as H from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setSelectedTemplate } from '../../stateManagement/actions/selectedTemplate';
import { setSelectedWish } from '../../stateManagement/actions/selectedWish';
import { setTemplates } from '../../stateManagement/actions/templateActions';
// import { CLink } from '../../ui-fabric/index';
import ParseHTML from '../ParseHTML/ParseHTML';
import TInput from '../TInput/TInput';
import './Create.css';


interface ICreateProps {
    setSelectedTemplate: (templateID: number) => void;
    selectedWish: IWish;
    selectedTemplate: ITemplate;
    templateList: ITemplate[];
    location: H.Location;
}

interface ICreateSate {
    formData: IField[];
}

class Create extends React.Component<ICreateProps, ICreateSate> {
    constructor(props: ICreateProps) {
        super(props);
        this.state = {
            formData: []
        };
        console.log("Create props", props);
        this.handleDInput = this.handleDInput.bind(this);
        this.rendToDoForm = this.rendToDoForm.bind(this);
    }

    public componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);
        this.props.setSelectedTemplate(Number(params.get("template")));
        // this.props.setTemplates(Number(this.props.match.params.templateSlug));
        this.setState({ formData: this.props.selectedTemplate.fields });
    }

    public componentDidMount(){
        // this.setState({ formData: this.props.selectedTemplate.fields });
    }

    public componentDidUpdate() {
        console.log("updated props", this.props);
    }

    public handleDInput(event: any) {
        console.log("event.target", event.target);
        const id:string = event.target.getAttribute("data-id");
        const newFormData = this.state.formData.map((form) => {
            if (form.id === Number(id)) {
                form.value = event.target.value;
                return Object.create(form);
            } else {
                return Object.create(form);
            }
        });
        this.setState({ formData: newFormData });
        console.log(event.target.getAttribute("data-id"), this.state);
    }

    public rendToDoForm() {

        if (this.state.formData) {
            return this.state.formData.map((input, index) => {

                return <TInput key={index} onChange={this.handleDInput} data={input} />
            }
            )
        }
        else {
            return (<div />);
        }
    }

    public createMarkup(html: string) {
        return { __html: html };
    }

    public render() {
        // if(this.props.selectedTemplate.templateCode !== undefined) {
            return (
                <div className="App">
                    {/* {this.props.selectedWish ? this.props.selectedWish.name : null}
                    <span> {this.props.selectedTemplate.name} </span>
                    <ParseHTML data={this.props.selectedTemplate.fields} template={unescape(this.props.selectedTemplate.templateCode)} /> */}
                    {/* <span> <div dangerouslySetInnerHTML={this.createMarkup(unescape(this.props.selectedTemplate.templateCode))} /> </span>  */}

                    {/* {this.rendTemplates()} */}
                    <div className="row">
                        <div className="col-md-8">
                            <ParseHTML data={this.state.formData} template={unescape(this.props.selectedTemplate.templateCode)} />
                        </div>
                        {<div className="col-md-4">
                            {this.rendToDoForm()}
                        </div>}
                    </div>
                </div>
            );
        // }
        // else {
        //     return (<div />);
        // }
    }
}

function mapStateToProps(state: IState) {
    return {
        selectedTemplate: state.selectedTemplate,
        selectedWish: state.selectedWish,
        templateList: state.templates
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ setSelectedWish, setTemplates, setSelectedTemplate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);