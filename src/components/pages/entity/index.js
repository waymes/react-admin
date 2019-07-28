import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import ArrowLeft from '@material-ui/icons/ArrowBack';

import { Button, Loading } from '../../commons';
import authGuard from '../../layouts/auth-guard';
import { fetchEntity, saveEntity } from '../../../store/actions/entity';
import { fieldOptions } from './constants';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
    boxSizing: 'border-box',
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginTop: theme.spacing(3),
  },
  group: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: indigo[50],
    marginBottom: theme.spacing(2),
  },
  goBackButton: {
    margin: theme.spacing(3, 3, 0, 3),
    padding: theme.spacing(1, 2, 1, 1),
  },
  goBackIcon: {
    marginRight: theme.spacing(1),
  },
});

class Entity extends React.Component {
  componentDidMount() {
    fetchEntity();
  }

  renderField = (field, id) => {
    const { classes } = this.props;
    if (field.isGroup) {
      return (
        <div className={classes.group} key={id}>
          {field.items.map(this.renderField)}
        </div>
      );
    }

    const Field = fieldOptions[field.type] || fieldOptions.text;
    return (
      <Field name={field.name} label={field.label} key={field.name} />
    );
  }

  render() {
    const {
      classes, isLoading, entityData, title, entityFieldList, history,
    } = this.props;

    if (isLoading) return <Loading />;

    return (
      <>
        <Button onClick={history.goBack} className={classes.goBackButton}>
          <ArrowLeft className={classes.goBackIcon} />
          Go back
        </Button>
        <Paper className={classes.root}>
          <Form
            onSubmit={saveEntity}
            initialValues={entityData}
            subscription={{}}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Typography variant="h5" component="h3">
                  {title}
                </Typography>
                {entityFieldList.map(this.renderField)}
                <Button color="primary" className={classes.submit} type="submit">
                  Save
                </Button>
              </form>
            )}
          />
        </Paper>
      </>
    );
  }
}

Entity.propTypes = {
  classes: PropTypes.shape().isRequired,
  isLoading: PropTypes.bool.isRequired,
  entityData: PropTypes.shape(),
  entityFieldList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

Entity.defaultProps = {
  entityData: null,
  title: '',
};

const mapStateToProps = state => ({
  isLoading: state.entity.isLoading,
  entityData: state.entity.entityData,
  entityFieldList: state.entity.entityFieldList,
  title: state.entity.title,
});

export default compose(
  authGuard,
  withStyles(styles),
  connect(mapStateToProps),
)(Entity);
