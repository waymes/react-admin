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

import { Button, Loading } from '../../commons';
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

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.url !== prevProps.match.url) {
      fetchEntityList();
    }
  }

  getLinkToEntity(entityId) {
    const { match } = this.props;

    return `/${match.params.entities}/${entityId}`;
  }

  render() {
    const {
      entityList, fieldList, isLoading, classes, goToEntityPageLabel,
    } = this.props;

    if (isLoading) return <Loading />;

    if (entityList.length === 0) return 'Empty for now';

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {fieldList.map(field => (
                <TableCell key={field.name}>{field.label}</TableCell>
              ))}
              {goToEntityPageLabel && <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {entityList.map(entity => (
              <TableRow key={entity.id} hover>
                {fieldList.map(field => (
                  <TableCell key={field.name}>{entity[field.name]}</TableCell>
                ))}
                {goToEntityPageLabel && (
                  <TableCell align="right">
                    <Button component={Link} to={this.getLinkToEntity(entity.id)}>
                      {goToEntityPageLabel}
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

EntitiesList.propTypes = {
  entityList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fieldList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.label,
  })).isRequired,
  goToEntityPageLabel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  classes: PropTypes.shape().isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      entities: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  entityList: state.entityList.entityList,
  fieldList: state.entityList.fieldList,
  isLoading: state.entityList.isLoading,
  goToEntityPageLabel: state.entityList.goToEntityPageLabel,
});

export default compose(
  authGuard,
  withStyles(styles),
  connect(mapStateToProps),
)(EntitiesList);
