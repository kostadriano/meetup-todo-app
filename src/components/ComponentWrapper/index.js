import React from 'react'
import './ComponentWrapper.css'

const stringifyObject = (object) =>
  JSON.stringify(object, function (key, value) {
    if (typeof value === 'function') {
      return value.toString();
    } else {
      return value;
    }
  }, 2)

const ComponentWrapper = ({ state, name, children, props }) =>
  <>
    <h4 className='ComponentWrapper_name'>{name}</h4>
    <div className='ComponentWrapper_content'>
      <div className='ComponentWrapper_children'>
        {children}
      </div>

      <pre className='ComponentWrapper_code'>
        {
          props &&
          <>
            <h4>Props</h4>
            <code>
              {stringifyObject(props)}
            </code>
          </>
        }

        {
          state &&
          <>
            <h4>State</h4>
            <code>
              {stringifyObject(state)}
            </code>
          </>
        }
      </pre>
    </div>
  </>

export default ComponentWrapper
