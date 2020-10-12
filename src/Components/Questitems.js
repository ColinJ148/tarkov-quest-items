import React from 'react'
import { Checkbox, Button, List, ListItem, ListItemIcon, Grid, Paper, ListItemText } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import itemList from '../QuestItemsList'
import background from '../assests/background.png'
import '../App.css'


const items = itemList.items;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${background})`,
        marginBottom: theme.spacing(5),
    },
    paper: {
        width: 400,
        height: 800,
        overflow: 'auto',
        background: 'rgb(0,0,0,.7)',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)

    },
    button: {
        margin: theme.spacing(0.5, 5,0,5),
        background: '#7b6d52'
    },

    itemText: {
        color: '#7b6d52',
        fontSize: 'large',
    },

}));

const CustomCheckbox = withStyles({
    root: {
        color: '#7b6d52',
        '&$checked': {
            color: '#7b6d52',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const not = (a, b) => {
    return a.filter((value) => b.indexOf(value) === -1);
}

const intersection = (a, b) => {
    return a.filter((value) => b.indexOf(value) !== -1);
}


const Questitems = () => {
    const [left, setLeft] = React.useState(items);
    const [right, setRight] = React.useState([]);
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (items) => (
        <Paper className={classes.paper}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem key={value} className={classes.itemText} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <CustomCheckbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item>{customList(left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">

                    <Button
                        variant="outlined"
                        size="large"
                        className={classes.button}
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
              </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        className={classes.button}
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;

              </Button>
                </Grid>
            </Grid>
            <Grid item>{customList(right)}</Grid>
        </Grid>
    );

}

export default Questitems;