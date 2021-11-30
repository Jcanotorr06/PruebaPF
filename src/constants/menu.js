import { adminRoot } from './defaultValues';
// import { UserRole } from "helpers/authHelper"

const data = [
  {
    id: 'Transactions',
    icon: 'iconsminds-shop',
    label: 'Transactions',
    to: `${adminRoot}/transactions`,
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
