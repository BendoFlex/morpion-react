import React from 'react'

export default function Squares (props) {
    //onClick={function() { alert('clic'); }} cette écriture se déclenche en auto
    return (
      <button className="square"
              onClick={() => { props.onClick()} }
              >
        {props.value}
      </button>
    );
  }
// const Comp = () => {}

 