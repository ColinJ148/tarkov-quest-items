import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';



const footerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#7b6d52',
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: theme.spacing(4),
    },
    disclosreText: {
        color: '#7b6d52',
        fontSize: 12,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(80)
    },
    iconGroup: {
        color: '#7b6d52',
    }
}));



const Footer = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={footerTheme}>
            <div className={classes.root}>
                <div className={classes.disclosreText}>
                    Tarkov Quest Item Tracker isn't endorsed by Battlestate Games and
                    doesn't reflect the views or opinions of Battlestate Games or anyone officially involved in
                    producing or managing Escape From Tarkov.

                    All the information and assets shown are directly observable
                    in-game. All data was acquired purely by observing and no third-party software was
                    used to mine data in any way.
                </div>
                <IconButton color='primary' onClick={() => window.open('https://github.com/ColinJ148/tarkov-quest-items', '_blank')}>
                    <GitHubIcon />
                </IconButton>
            </div>

        </ThemeProvider>

    )
}

export default Footer