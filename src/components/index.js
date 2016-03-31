/*
* dependencies
*/

import React from 'react';
import EmployList from './employ-list';

lett employs = [
    {number: 1, name='Squirtle', icon='Squirtle.png'},
    {number: 2, name='Bulbasaur', icon='bulbasaur.png'},
    {number: 3, name='Cyndaquil', icon='cyndaquil.png'},
    {number: 4, name='Pikachu', icon='pikachu.png'}
];

React.render(<EmployList employs = employs/>, document.getElementsByName('content'));