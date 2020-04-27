import React from 'react';
import './App.css';
import { TabsHead } from './TabsHead';
import { TabsBody } from './TabsBody';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Tab 1',
    };
  }

  onTabSelected = (title) => {
    this.setState(() => ({
      selected: title,
    }));
  };

  render() {
    const vievContent = tabs.find(tab => tab.title === this.state.selected);

    return (
      <div className="app">
        {tabs.map(theadCell => (
          <TabsHead
            onTabSelected={this.onTabSelected}
            selectedTab={this.state.selected}
            key={theadCell.title}
            title={theadCell.title}
          />
        ))}
        <TabsBody text={vievContent.content} />
      </div>
    );
  }
}

export default App;
