import { LinearProgressProps } from '@mui/material';

export interface ProductItem {
  id?: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
  uses: number; // Newly added column for 'Uses'
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    name: 'Paracetamol',
    color: 'warning',
    sales: 50,
    uses: 40
  },
  {
    id: '02',
    name: 'Amoxicillin',
    color: 'primary',
    sales: 62,
    uses: 32
  },
  {
    id: '03',
    name: 'Antibiotic',
    color: 'info',
    sales: 1002,
    uses: 410
  },
  {
    id: '04',
    name: 'Ibuprofen',
    color: 'secondary',
    sales: 3,
    uses: 20
  },
];
