import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { searchEmployee } from '../redux/Employee/actionCreators';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const styles = {
    iconButton: {
        marginTop: -3
    }
}


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '' 
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    searchEmployee = () => {
        this.props.search(this.state.keyword)
    }

    render() {
        const { classes } = this.props
        const { keyword } = this.state

        return (
            <div>
                <TextField 
                    variant="outlined"
                    name="keyword"
                    size="small"
                    value={keyword}
                    label="Search"
                    onChange ={this.handleChange}
                />
                <IconButton className={classes.iconButton} aria-label="search" onClick={this.searchEmployee}>
                    <SearchIcon />
                </IconButton>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    search: bindActionCreators(searchEmployee, dispatch)
})

export default withStyles(styles)(connect(null, mapDispatchToProps)(Search))