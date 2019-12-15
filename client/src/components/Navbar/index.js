import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  navbar: {
    width: '100%',
    boxSizing: 'border-box',
    height: '64px',
    padding: '0.425rem 1.25rem',
    backgroundColor: `#0c3c59`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: `center`,
    justifyContent: 'space-between'
  },
  brand: {
    color: '#ffffff',
    fontFamily: "'Revalia', cursive",
    fontSize: '24px',
    letterSpacing: '4px',
    textShadow: '0 3px 1px #0d0d0d'
  },
  search: {
    width: 'min-content',
    height: 'min-content',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '250px',
    padding: '0.425rem 0.825rem',
    border: 'none',
    backgroundColor: '#c2dcf2',
    borderRadius: '0.825rem 0 0 0.825rem',
    borderRight: '1px solid #000',
    lineHeight: '27px',
    fontSize: '16px',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '600',
    letterSpacing: '1px'
  },
  button: {
    padding: '0.425rem',
    border: 'none',
    borderRadius: '0 0.825rem 0.825rem 0',
    backgroundColor: '#048abf',
    color: '#ffffff',
    transition: 'background-color, 0.5s',
    '&:hover': {
      backgroundColor: '#72cef2',
      color: '#0c3c59',
      cursor: 'pointer'
    }
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.navbar}>
      <div className={classes.brand}>Creek Geeks</div>
      <div className={classes.search}>
        <input
          name='searchParams'
          value={props.searchValue}
          className={classes.input}
          type='text'
          onChange={props.handleInputChange}
          placeholder='search...'
        />
        <button className={classes.button}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
