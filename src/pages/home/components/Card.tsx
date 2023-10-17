import {  Button, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import localFont from "@next/font/local";

import React from "react";


const openSansExtraBold = localFont({
  src: '../../../../public/Causten-Regular.otf' 
 })

function CardInput() {
  return (
    <>
      <Card sx={{ maxWidth: 350, margin: 'auto' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/300849399_1378995459293714_446150436152832763_n.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6"  component="div">
          Lorem
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic animi nostrum ipsa saepe perspiciatis unde natus, officiis impedit obcaecati? Molestias amet magnam nobis minima architecto saepe sunt libero perspiciatis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error">Ver mais</Button>
        
      </CardActions>
    </Card>
    </>
  );
}
export default CardInput;
