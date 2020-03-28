import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import bauhaus from '../../Assets/bauhaus.jpeg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Building(props) {
    const classes = useStyles();
    const { building } = props;


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={bauhaus}

                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {building.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {building.address}
                        <br />
                        {building.users} Users       {building.offices} Offices
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    For Rent
          </Button>
                <Button size="small" color="primary">
                    &pound;{building.sqm}
                </Button>
            </CardActions>
        </Card>
    )
}
