import React from 'react'

const TagComponent = (props) => {
    const styles= {
        container : {
            display: 'flex',
            backgroundColor: props.color || '#7EB0DB',
            padding : '4px',
            border:'black 1px solid',
            color:'white',
            borderRadius:'2px',
            fontSize:'.7rem',
            fontFamily:'Rubik, monospace',
            alignItems:'center',
            marginRight:'5px',
            height:'1rem',
        }
    }
    return (
        <div style={styles.container}>
            {props.text}
        </div>
    )
}

export default TagComponent
