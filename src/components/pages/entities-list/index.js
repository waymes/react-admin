import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Button } from '../../commons';
import authGuard from '../../layouts/auth-guard';

import { fetchEntityList } from '../../../store/actions/entityList';

const styles = theme => ({
  root: {
    margin: theme.spacing(3, 2),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

class EntitiesList extends Component {
  componentDidMount() {
    fetchEntityList();
  }

  getLinkToEntity(entityId) {
    const { match } = this.props;

    return `/${match.params.entities}/${entityId}`;
  }

  render() {
    const {
      list, allowedFields, isLoading, classes,
    } = this.props;

    if (isLoading) return 'Loading...';

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {Object.values(allowedFields).map(label => (
                <TableCell>{label}</TableCell>
              ))}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(entity => (
              <TableRow key={entity.id} hover>
                {Object.keys(allowedFields).map(key => (
                  <TableCell key={entity[key]}>{entity[key]}</TableCell>
                ))}
                <TableCell align="right">
                  <Button component={Link} to={this.getLinkToEntity(entity.id)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

EntitiesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  allowedFields: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  list: state.entityList.list,
  allowedFields: state.entityList.allowedFields,
  isLoading: state.entityList.isLoading,
});

export default compose(
  authGuard,
  withStyles(styles),
  connect(mapStateToProps),
)(EntitiesList);
