import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';

const DataListView = ({ product, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.idTransaction} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product.idTransaction)}
          className={classnames('d-flex flex-row', {
            active: isSelect,
          })}
        >
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${product.idTransaction}`} className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {product.amount}$
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.email}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.cardType}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.dateTms}
              </p>
              <div className="w-15 w-sm-100">
                <Badge color={product.status === 1 ? 'success' : 'danger'} pill>
                  {product.status === 1 ? 'Completada' : 'Pendiente'}
                </Badge>
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${product.idTransaction}`}
                checked={isSelect}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
