import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import ChasmLake from '../assets/photo_grid/ChasmLake.jpg';
import PineTree from '../assets/photo_grid/PineTree.jpg';
import Sangre1 from '../assets/photo_grid/Sangre1.jpg';
import Vert1 from '../assets/photo_grid/Vert1.jpg';
import Moss from '../assets/photo_grid/Moss.jpg';
import MtParn1 from '../assets/photo_grid/MtParn1.jpg';
import Breck1 from '../assets/photo_grid/Breck1.jpg';
import Abasin from '../assets/photo_grid/a_basin.jpg';
import Dunes1 from '../assets/photo_grid/Dunes1.jpg';
import Dunes2 from '../assets/photo_grid/Dunes2.jpg';
import Dunes3 from '../assets/photo_grid/Dunes3.jpg';
import Dunes4 from '../assets/photo_grid/Dunes4.jpg';
import Dunes5 from '../assets/photo_grid/Dunes5.jpg';
import TwinLakes1 from '../assets/photo_grid/TwinLakes1.jpg';
import IndianPaintbrush from '../assets/photo_grid/IndianPaintbrush.jpg';
import NCARHike from '../assets/photo_grid/NCARHike.jpg';
import ChicagoLakes from '../assets/photo_grid/ChicagoLakes.jpg';
/*
import {
    ChasmLake, PineTree, Vert1, MtParn1, Sangre1, Moss,
    Breck1, Abasin, Dunes1, TwinLakes1, Wisco1, Dunes2,
    Dunes3, Dunes4, Dunes5, IndianPaintbrush, NCARHike,
    ChicagoLakes,
  } from '../assets/photo_grid'
*/


const PhotoGrid = () => {
  return(
    <div id='photoGrid'>
      <div className='row_600p'>
        <div className='r2_c3'>

          <img src={ChasmLake} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>
        
        </div>
        <div className='r2_c1'>

          <img src={PineTree} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

        </div>
      </div>

      <div className='row_600p'>
        <div className='r2_c2'>
          
          <img src={Breck1} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>
        
        </div>
        <div className='r2_c2_shell'>
          <div className='r1_c2_inner'>

            <img src={TwinLakes1} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r1_c1_inner'>

            <img src={Abasin} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r1_c1_inner'>

            <img src={Moss} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
        </div>
      </div>

      <div className='row_600p'>
        <div className='r2_c1_shell'>
          <div className='r1_c1_vert'>

            <img src={IndianPaintbrush} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r1_c1_vert'>

            <img src={ChicagoLakes} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
        </div>
        <div className='r2_c3'>

          <img src={Dunes4} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>
        
        </div>
      </div>

      <div className='row_900p'>
        <div className='r3_c2_shell_left'>
          <div className='r66_c50_inner'>

            <img src={Sangre1} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r33_c50_inner'>

            <img src={Dunes3} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
        </div>
        <div className='r3_c2'>

          <img src={Dunes2} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>

        </div>
      </div>

      <div className='row_600p'>
        <div className='r2_c3_left'>

          <img src={Dunes5} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>

        </div>
        <div className='r2_c1_shell'>
          <div className='r1_c1_vert'>

            <img src={MtParn1} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r1_c1_vert'>

            <img src={NCARHike} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
        </div>
      </div>

      <div id="last_row" className='row_900p'>
        <div className='r3_c2'>

          <img src={Vert1} id='Chasm Lake' alt='Chasm Lake' className='pg_img'/>

        </div>
        <div className='r3_c2_shell_right'>
          <div className='r33_c50_inner'>

            <img src={Dunes1} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
          <div className='r66_c50_inner'>

            <img src={Sangre1} id='Pine Tree' alt='Pine Tree' className='pg_img'/>

          </div>
        </div>
      </div>
    </div>
  )
}
export default PhotoGrid;
    /*<div id='photo_grid'>
      <div className='photo_row'>
        <div className='c3_r2 photo_cell'>
          <img src={ChasmLake} id='Chasm Lake' alt='Chasm Lake' />
        </div>
        <div className='c1_r2 photo_cell'>
          <img src={PineTree} id='Pine Tree' alt='Pine Tree' />
        </div>
      </div>
      <div className='photo_row'>
        <div className='c1_r3 photo_cell'>
          <img src={Moss} id='Moss' alt='Moss' />
        </div>
        <div className='c1_r2 photo_cell'>
          <img src={MtParn1} id='MtParn1' alt='MtParn1' />
        </div>
        <div className='c2_r1 photo_cell'>
          <img src={Sangre1} id='Sangre1' alt='Sangre De Christos' />
        </div>
      </div>
      
      <div className='c2_r1 photo_cell'>
        <img src={Moss} id='Moss' alt='Moss' />
      </div>
      <div className='c2_r2 photo_cell'>
        <img src={Vert1} id='Maroon Bells 1' alt='Maroon Bells 1' />
      </div>
      
      
    </div>*/
/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
    <Box sx={{flexGrow: 1}}>
      <Grid xs={8}>
          <Item>
            <img src={ChasmLakePic} id='Chasm Lake' alt='Chasm Lake' />
          </Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Box>

    */
/*
const itemData = [
  {
    img: ChasmLake,
    title: 'Chasm Lake - Fall',
    cols: 3,
    rows: 2.
  },
  {
    img: PineTree,
    title: 'Pine Tree',
    rows: 2,
  },
  {
    img: Sangre1,
    title: 'Sangre de Christo',
    cols:2,
  },
  {
    img: Vert1,
    title: 'Maroon Bells 1',
    rows: 3,
    cols: 2
  },
  {
    img: Moss,
    title: 'Wet Moss',
    rows: 2,
  },
  {
    img: MtParn1,
    title: 'Mt. Parnassus 1',
  },
  {
    img: Breck1,
    title: 'Breckenridge 1',
  },
  {
    img: Abasin,
    title: 'Arapahoe Basin',
    cols: 3,
    rows: 2,
  },
  {
    img: Dunes1,
    title: 'Great Sand Dunes',
    rows: 2,
  },
  {
    img: Wisco1,
    title: 'UW Arboretum Boardwalk',
    rows: 3,
  },
  {
    img: TwinLakes1,
    title: 'Twin Lakes CO',
    cols: 3,
    rows: 2,
  },
  {
    img: Dunes4,
    title: 'Great Sand Dunes - 4',
    cols: 3,
    rows: 2,
  },
  {
    img: ChicagoLakes,
    title: 'Chicago Lakes CO',
    cols: 1,
    rows: 1,
  },
  {
    img: Dunes3,
    title: 'Great Sand Dunes - 3',
    cols: 3,
    rows: 2,
  },
  
  {
    img: IndianPaintbrush,
    title: 'Indian Paintbrush',
    cols: 1,
    rows: 2,
  },
  {
    img: NCARHike,
    title: 'NCAR Hike',
    cols: 2,
    rows: 1,
  },
  {
    img: Dunes2,
    title: 'Great Sand Dunes - 2',
    cols: 3,
    rows: 2,
  },
  {
    img: Dunes5,
    title: 'Great Sand Dunes - 5',
    cols: 3,
    rows: 2,
  },
];
*/