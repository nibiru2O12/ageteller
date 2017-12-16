import React,{Component} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import AgeStats from './AgeStats.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newDate:"",
      birthday:"",
      showStats:false
    };
  }

  changeDate(){
    console.log(this.state.newDate);
    this.setState({
      birthday:this.state.newDate,
      showStats:true
    });
  }

  render(){

    let ageStats=(<div></div>);

    if(this.state.showStats){
      ageStats=(<AgeStats date={this.state.birthday} />)
    }

    return(
      <div className="App">
        <Form inline>
          <h1>Age Teller</h1>
          <FormControl type="date"
            onChange={e=>this.setState({ newDate:e.target.value })}
            value={this.state.newDate}>
          </FormControl>
          {' '}
          <Button onClick={()=>this.changeDate()}>Submit</Button>
          {ageStats}
        </Form>
      </div>
    )
  }
}

export default App;
