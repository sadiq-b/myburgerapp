import React from 'react';
import {configure, shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import navigationItems from './NavigationItems';

configure ({adapter: new Adapter()});
describe('<NavigtionItems/>',  () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper= shallow(<NavigationItems/>)
    })
    
    it('should render two <NavigationItem/> elements if not authenticated', 
         () => {
           
           expect(wrapper.find(NavigationItem)).toHaveLength(2); 
        });

    it('should render three <NavigationItem/> elements if authenticated', 
        () => {
          wrapper.setProps({isAuthenticated: true});
          expect(wrapper.find(NavigationItem)).toHaveLength(3); 
       });   

    it('showed an exact loggout button', 
       () => {
         wrapper.setProps({isAuthenticated: true});
         expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true); 
      });      
});

export default navigationItems;