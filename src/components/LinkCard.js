import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  let bio = ''
  let href = ''

  switch (props.title) {
    case 'landscape design':
      bio = "samples from my project work in landscape architecture + garden design";
      href = "/landscape"
      break;
    case 'computer science':
      bio = "recent academic, personal and professional project work samples";
      href = "/comp_sci"
      break;
    case 'hobbies':
      bio = "a few of my favorite passion projects from gardening to baking";
      href = "/photography"
      break;
    case 'art // photography':
      bio = "personal photography and academic artwork from my time at uw-madison";
      href = "/photography"
      break;
    default:
      break;
  }



  return (
    <a href={href}>
      <Card className="standard_card" sx={{ height: '100%', width: '100%', margin: '5% 0' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150px"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div" id="card_title">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" id="card_text">
              {bio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}