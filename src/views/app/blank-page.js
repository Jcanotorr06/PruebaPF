import React from 'react'; 
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
/* import axios from 'axios'; */
import DataListPages from './data-list';

const BlankPage = () => {
  /* const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          'https://sandbox.paguelofacil.com/PFManagementServices/api/v1/MerchantTransactions',
          {
            headers: {
              Authorization:
                'brEyQRSzMm2UwQa5v0NsobRa3U8nH5xT|DIRwqtVn2Xumfnhe3P7gRDHZ6',
            },
          }
        )
        .then((res) => {
          setTransactions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []); */
/*   console.log(transactions); */
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Transactions"/>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <DataListPages />
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
