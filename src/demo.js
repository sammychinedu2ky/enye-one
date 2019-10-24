import React, {useCallback} from 'react';
import MaterialTable from 'material-table';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import { connect,useDispatch,useSelector,shallowEqual } from "react-redux";
import {setState} from './Redux/action.js'
const useStyles = makeStyles({
  root: {
    width: '40%',
   
    overflowX: 'auto',
  },
  alignItemsAndJustifyContent: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  table: {
    minWidth: '10%',
    overflowX: "scroll"
  },
});
 export default function MaterialTableDemo() {
const classes = useStyles();
let props = useSelector(({columns,data})=>({columns,data}))
console.log(props.data)
/* doesn't work well due to change in reference after rendering
props.setState = useDispatch(content => ({
  type: 'CHANGE',
  data:{...content}
}));*/
let dispatch = useDispatch()
props.setState = useCallback((content)=>dispatch({type:'CHANGE',data:{...content}}),[dispatch])
/*const incrementCounter = useCallback(
  () => dispatch({ type: 'increment-counter' }),
  [dispatch]
)*/
 /* const [state, setState] = React.useState({
    columns: [
      { title: 'FirstName', field: 'firstname' },
      { title: 'LastName', field: 'lastname' },
      { title: 'Birthday', field: 'birthday', type: 'date' },
     
      { title: 'Age', field: 'age'},
      {
        title: 'Hobby',
        field: 'hobby',
        lookup: { 1: 'Reading', 2:'Coding',3:'Movies',4:'Eating',5:'Tennis',6:'Others' },
      },
    ],
    data: [
       ],
  });
*/
return (<>
    <Box m="auto">
    <div className={classes.alignItemsAndJustifyContent}>
    <Typography variant='h5' component='h5' style={{marginBottom:12}} >
    Example detailing an editable form and table
    </Typography>
     </div>
    </Box>
    <Paper>
    
    <MaterialTable sm={6}
      title="Editable Table form"
      //columns={state.columns}
      columns={props.columns}
      
     // data={state.data}
      data={props.data}
      
      actions={[
        {
          icon: 'save',
          tooltip: 'Submit',
          onClick: (event, rowData) => alert("You saved " + JSON.stringify())
        }
      ]}
      editable={{
        onRowAdd: newData =>console.log(newData)||
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              //const data = [...state.data];
              const data = [...props.data]
             // alert(new Date(data['birthday']).getUTCFullYear())
              newData.age=(new Date().getUTCFullYear())-(new Date(newData['birthday']).getUTCFullYear())
            
        //   data[data.indexOf(newData)]['age']=
       // (new Date().getUTCFullYear())-(new Date(data[data.indexOf(newData)]['birthday']).getUTCFullYear())

              data.push(newData);
              //setState({ ...state, data });
              props.setState({...props,data})
              console.log({...props,data})
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              //const data = [...state.data];
              const data = [props.data]
              data[data.indexOf(oldData)] = newData;
             data[data.indexOf(newData)]['age']=(new Date().getUTCFullYear())-(new Date(data[data.indexOf(newData)]['birthday']).getUTCFullYear())
             
            
              //setState({ ...state, data });
            
            props.setState({...props,data})
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              //const data = [...state.data];
              const data = [...props.data]
              data.splice(data.indexOf(oldData), 1);
              //setState({ ...state, data });
              props.setState({...props,data})
            }, 600);
          }),
      }}
    />
    </Paper>
    </>
  );
}


function mapStateToProps({columns,data}) {
  
  return { columns,data }
}
/*export default connect(
  mapStateToProps,
  {setState} 
)(MaterialTableDemo);*/