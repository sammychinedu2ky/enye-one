import React from 'react';
import MaterialTable from 'material-table';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
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
  const [state, setState] = React.useState({
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

  return (<>
    <Box m="auto" >
    
      <div className={classes.alignItemsAndJustifyContent}>
      <Typography variant='h5' component='h5' style={{marginBottom:12}} >
      Example of an editable form and table
      </Typography>
     
     
      </div>
    </Box>
    <Paper style={{width:"90%",margin:'auto'}} >
    
    <MaterialTable 
      title="Editable Table form"
      columns={state.columns}
      
      data={state.data}
      actions={[
        {
          icon: 'save',
          tooltip: 'Submit',
          onClick: (event, rowData) => alert("You saved " + JSON.stringify(rowData))
        }
      ]}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
             // alert(new Date(data['birthday']).getUTCFullYear())
              newData.age=(new Date().getUTCFullYear())-(new Date(newData['birthday']).getUTCFullYear())
            
        //   data[data.indexOf(newData)]['age']=
       // (new Date().getUTCFullYear())-(new Date(data[data.indexOf(newData)]['birthday']).getUTCFullYear())

              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              
              data[data.indexOf(oldData)] = newData;
             data[data.indexOf(newData)]['age']=(new Date().getUTCFullYear())-(new Date(data[data.indexOf(newData)]['birthday']).getUTCFullYear())
             
            
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
    </Paper>
    </>
  );
}
