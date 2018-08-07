import { Spin } from 'antd';
import * as React from 'react';
import './index.css';

export type spinnerType = 'small' | 'large' | 'default';

interface ILoadingSpinner {
    isLoading: boolean;
    size?: spinnerType;
    delay?: number;
    indicator?: React.ReactElement<any>;
    tip?: string;
    ClassName?: string;
    children?: React.ReactChild;
}

class LoadingSpinner extends React.Component<ILoadingSpinner> {

    constructor(props: ILoadingSpinner) {
        super(props);
    }

    public render() {
        return (
            <Spin spinning={this.props.isLoading} size={this.props.size}  delay={this.props.delay}
                    tip={this.props.tip} wrapperClassName={this.props.ClassName} 
                    indicator={this.props.indicator}  >
                {this.props.children}
            </Spin>
        );
    }
}

export default LoadingSpinner;