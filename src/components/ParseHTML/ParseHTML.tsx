import * as React from 'react';
import { connect } from 'react-redux';
const HtmlToReact = require('html-to-react');
const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();
const _ =  require('lodash');
// var htmlInput = '<div id="wish_container" class="col-7"><div id="from_name" class="neon">vamsi</div><div class="mid_text">Wishes You</div><div id="toName"></div><div id="wish_img"><img src="https://first-wishes.online/pictures/HappyVinayakaChavithi.gif"><br><img src="https://first-wishes.online/pictures/ganesha/ganesh1.png" id="wishimg"></div><div id="by_name"></div></div><link rel="stylesheet" href="https://first-wishes.online/styles/VinayakaChavithiWishes.css"  />';
// var htmlExpected = '<div><div data-test="foo"><h1>Heading</h1></div></div>';
let prop = {data:[{} ], template:""};
let cId = {value:""};
let reactHtml = "";
const id = "id";
interface IParseProps {
  data: IField[];
  template: string;  
}

class ParseHTML extends React.Component<IParseProps, any > {
  
  constructor(props: any){
    super(props);
    prop = props;
    console.log("ParseHTML", props);
    
    this.htmlToReact = this.htmlToReact.bind(this);
  }
  
  public componentDidUpdate(){
    prop = this.props;
  }
  
  public htmlToReact() {
    console.log("prop", prop);
    const isValidNode = () => true;  

    const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

    // Order matters. Instructions are processed in
    // the order they're defined
    const processingInstructions = [
      {
        // This is REQUIRED, it tells the parser
        // that we want to insert our React
        // component as a child
        processNode: (node: any, children: any, index: any) => {
          console.log("cId", cId, node, children, index);
          return cId.value;
        },
        replaceChildren: true,
        shouldProcessNode:  (node: any) => {
          if(node.attribs){
           const field = _.find(prop.data, {fId: node.attribs[id] });
           console.log(field);
           if(field){
             cId = field;
             return true;
           }
          }
          return false;
          // return node.attribs && node.attribs['id'] === 'from_name';
        }
      },
      {
        // Anything else
        processNode: processNodeDefinitions.processDefaultNode,

        shouldProcessNode: (node: any) => {
          return true;
        }
      },
    ];

    const reactComponent = htmlToReactParser.parseWithInstructions(
      prop.template, isValidNode, processingInstructions);
    reactHtml = ReactDOMServer.renderToStaticMarkup(
      reactComponent);
    console.log("reactHtml", reactHtml, prop);
    return reactComponent;

  }

  public render() {
    return (
      <div>
      {this.htmlToReact()}
      </div>
    )
  }

}
export default connect(null, null)(ParseHTML);
// export default (va: any) => { console.log(va); return reactComponent }; 