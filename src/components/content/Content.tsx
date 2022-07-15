import React, { FC, ReactElement} from 'react';
import './content.css';
//import TabList from '../tablist/TabList';
import TabList from '../newtab/TabList';


const Content: FC <any> = () : ReactElement => {
  return (
    <div className='content'>
      <TabList />
      <button className='save-changes'>Save Changes</button>
    </div>
  );
}

export default Content;
