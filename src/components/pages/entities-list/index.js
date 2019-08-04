import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Button, Loading } from '../../commons';
import Table from './table';
import authGuard from '../../layouts/auth-guard';

import { fetchEntityList } from '../../../store/actions/entityList';

const styles = theme => ({
  root: {
    margin: theme.spacing(2, 2, 3),
    overflowX: 'auto',
  },
  empty: {
    margin: theme.spacing(2, 2),
    textAlign: 'center',
  },
  createNew: {
    display: 'block',
    width: 'max-content',
    margin: theme.spacing(2, 2, 0, 2),
    marginLeft: 'auto',
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

  getLinkToEntity = (entityId) => {
    const { match } = this.props;

    return `/${match.params.entities}/${entityId}`;
  }

  render() {
    const {
      entityList, fieldList, isLoading, classes, goToEntityPageLabel, createNew, match,
    } = this.props;

    if (isLoading) return <Loading />;

    const newEntityLink = `/${match.params.entities}/new`;
    return (
      <>
        {createNew && (
          <Button component={Link} to={newEntityLink} className={classes.createNew}>New</Button>
        )}
        <Paper className={classes.root}>
          {entityList.length === 0
            ? (
              <Typography variant="subtitle1" className={classes.empty}>
                Empty for now
              </Typography>
            )
            : (
              <Table
                entityList={entityList}
                fieldList={fieldList}
                goToEntityPageLabel={goToEntityPageLabel}
                getLinkToEntity={this.getLinkToEntity}
              />
            )
          }
        </Paper>
      </>
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
  createNew: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  entityList: state.entityList.entityList,
  fieldList: state.entityList.fieldList,
  isLoading: state.entityList.isLoading,
  goToEntityPageLabel: state.entityList.goToEntityPageLabel,
  createNew: state.entityList.createNew,
});

export default compose(
  authGuard,
  withStyles(styles),
  connect(mapStateToProps),
)(EntitiesList);
