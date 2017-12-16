import React,{Component} from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component{
 timeSince(date){
   let today=new Date().getTime();
   let other_date=new Date(date).getTime();
   // get difference in date on milliseconds
   let diff= Math.abs(today-other_date);
   // convert diff to days
   let days = Math.floor(diff / (1000*3600*24));
   //convert to years
   let years =Math.floor(days / 365);
   // get remainder days after getting years
   days=days % 365;
   // get months by divinding days to 31
   let months = Math.floor(days / 31);
   // get remainider days after getting months
   days=days % 31;

   return `Congrats on your ${years} years, ${months} months and ${days} days of existense`;

 }
  render(){

    return (
        <div>
          <h3>{this.props.date}</h3>
          <h4>{this.timeSince(this.props.date)}</h4>
          <img src={partyPopper} className='party-popper' />
        </div>
    )
  }
}

export default AgeStats;
