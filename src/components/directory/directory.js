import React from 'react';
import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Fujifilm',
          subtitle: 'Mirrorless',
          imageUrl:
            'https://images.unsplash.com/photo-1642424981710-71bb637c63a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          title: 'Sony',
          subtitle: 'Mirrorless',
          imageUrl:
            'https://images.unsplash.com/photo-1604677209047-d3b7ed2e07b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 2
        },
        {
          title: 'Nikon',
          subtitle: 'DSLR',
          imageUrl:
            'https://images.unsplash.com/photo-1604527039309-8044c298ba46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
          id: 3
        },
        {
          title: 'Canon',
          subtitle: 'DSLR',
          imageUrl:
            'https://images.unsplash.com/photo-1608003308807-2c1800bb8704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80',
          id: 4
        }
      ]
    };
  }
  render() {
    return (
      <div className='flex flex-wrap p-8'>
        {this.state.sections.map(({ title, subtitle, imageUrl, id }) => (
          <MenuItem
            key={id}
            title={title}
            subtitle={subtitle}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
