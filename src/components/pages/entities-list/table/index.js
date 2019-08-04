import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from '../../../commons';
import authGuard from '../../../layouts/auth-guard';

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
}));

const EntitiesList = ({
  fieldList, goToEntityPageLabel, entityList, getLinkToEntity,
}) => {
  const classes = useStyles();
  return (
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
                <Button component={Link} to={getLinkToEntity(entity.id)}>
                  {goToEntityPageLabel}
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

EntitiesList.propTypes = {
  entityList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fieldList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.label,
  })).isRequired,
  goToEntityPageLabel: PropTypes.string.isRequired,
  getLinkToEntity: PropTypes.func.isRequired,
};

export default authGuard(EntitiesList);
