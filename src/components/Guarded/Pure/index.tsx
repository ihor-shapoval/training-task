import {PureComponent} from 'react';

type PureProps = {
  text: string;
}

class Pure extends PureComponent<PureProps, {} > {
  render() {
    return <h2>{this.props.text}</h2>
  }
}

export default Pure;
