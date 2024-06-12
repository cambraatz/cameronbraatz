import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChasmLakePic from '../assets/photo_grid/ChasmLake.jpg';
import PineTreePic from '../assets/photo_grid/PineTree.jpg';
import {
    ChasmLake, PineTree, Vert1, MtParn1, Sangre1, Moss,
    Breck1, Abasin, Dunes1, TwinLakes1, Wisco1, Dunes2,
    Dunes3, Dunes4, Dunes5, IndianPaintbrush, NCARHike,
    ChicagoLakes,
  } from '../assets/photo_grid'

/*const QuiltedImageList = () => {*/
const PhotoGrid = () => {
  return(
    <div id='photo_grid'>
      <div className='c3_r2'>
        <img src={ChasmLakePic} id='Chasm Lake' alt='Chasm Lake' />
      </div>
      <div className='c1_r2'>
        <img src={PineTreePic} id='Pine Tree' alt='Pine Tree' />
      </div>
      {/*{itemData.map((item) => (
        <div className='QI_Picture' key={item.title}>
          <img id={item.title} src={item.img} alt={item.title} />
        </div>
      ))}*/}
    </div>
  )
}
export default PhotoGrid;
/*
export default QuiltedImageList;

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  
  export default function QuiltedImageList() {
    return (
      <ImageList
        sx={{ }}
        variant="quilted"
        cols={4}
        rowHeight={500}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 100, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
*/


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
