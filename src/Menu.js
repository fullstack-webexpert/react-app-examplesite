import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton style={{width:'100%',height:'70px'}}
            label="Trends"
            labelStyle={{lineHeight:'70px',fontSize:'30px',color:'gray'}}
            onClick={this.handleToggle}
        />
        <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
        >
            <MenuItem onClick={this.handleClose}>Google.com</MenuItem>
            <MenuItem onClick={this.handleClose}>Bing.com</MenuItem>
            <MenuItem onClick={this.handleClose}>Google Maps</MenuItem>
            <MenuItem onClick={this.handleClose}>Google translate</MenuItem>
        </Drawer>
      </div>
    );
  }
}