import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const tagOptions = [
  {
    key: '1',
    text: '가장높음',
    value: '1',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: '2',
    text: '높음',
    value: '2',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: '3',
    text: '보통',
    value: '3',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: '4',
    text: '낮음',
    value: '4',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: '5',
    text: '가장 낮음',
    value: '5',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    key: '0',
    text: '기본',
    value: '0',
    label: { empty: true, circular: true },
  }
  
]

const PriorityDropdown = () => (
  <Dropdown
    text='우선순위'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default PriorityDropdown;