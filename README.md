# simple-react-calendar-component

an easy to use react calander component.
just 3 required props and you're on your way.
easy classNames and optional custom classes
just add an array with two values and now the calander will be automaticly rendered with the data.

# install

npm install simple-react-calendar-component

# Simple Use

import dayjs from 'dayjs'; // u can use whatever date module u like, i recomment this one.
import Calendar, { DataObj } from 'simple-react-calendar-ts';

export default class App extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  // handle change for input element

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      targetMonth: dayjs(e.target.value)
        .startOf('M')
        .format('YYYY-MM-DD'),
      now: dayjs(e.target.value)
        .startOf('M')
        .format('YYYY-MM-DD')
        .valueOf(),
    });
  };

  // state for statefull use and handleState function to put in component
  
  state: StateTypes = {
    now: dayjs(date).valueOf(),
    targetDay: 1,
    targetDateString: '2019-10-01',
    targetMonth: '2019-10-01',
  };

  handleState = (data: object) => {
    this.setState(data);
  };

  render() {
    const { targetDay, targetDateString, targetMonth } = this.state;
    return (
      <div className="container">
        <div>
          <div>
            <h2>simple-react-calendar-component Example</h2>
            <h4>Example State</h4>
            <p>
              (for statefull use, uncomment and pick a day to see the
              differance)
            </p>
            <input
              style={{ marginTop: '20px', marginBottom: '20px' }}
              type="date"
              value={this.state.targetMonth}
              onChange={this.handleOnChange}
            />
            <p>targetDay = {targetDay}</p>
            <p>targetDateString = {targetDateString}</p>
          </div>
        </div>
        <Calander
          targetDay={this.state.targetDay} // required prop, number, stating the day in focus
          targetDateString={this.state.targetDateString} // required prop, string (YYYY-MM-DD), stating the month in focus
          targetMonth={this.state.targetMonth} // required prop, string (YYYY-MM-01), stating the month in focus
          title="Simple React Calendar Component" // optional, string, title in the calendar
          titleContainerClass="exampleTitleContainerClass" // optional, string, custom css for title
          showMonth={true} // optional, boolean
          monthTitleClass="exampleMonthTitleClass" // optional, string, custom css for month
          data={data} 
          onClickDay={(day: number, data: DataObj) =>
            // the function exposes the data u put in and the day you click on.
            console.log('onClick', day, data) 
          }
          handleState={this.handleState} // function, if exists any change in the component will change the state of your component
          width="100%" // default
          containerClassName="exampleClassContainer" // custom css class for calendar main container
          rowContainerClassName="exampleClassRow" // custom css class for calendar rows
          dayContainerClassName="exampleClassDay"  // custom css class for calendar days
          dayDataListClass="exampleDayDataListClass" // custom css class for item list (if u feed data prop)
          dayDataListItemClass="exampleDayDataListItemClass" // custom css class for list item (if u feed data prop)
          daysHeaderContainerClass="exampleDaysHeaderContainerClass" // custom css class for days header row
          daysTitleContainerClass="exampleDaysTitleContainerClass" // custom css class for days header item (all of the days)
          colorActiveDate="palegoldenrod" // string, custom color for the active date
          colorPastDates="#f1f1f1" // string, custom color for past dates (leave empty to avoid coloring past dates)
        />
      </div>
    );
  }
}
