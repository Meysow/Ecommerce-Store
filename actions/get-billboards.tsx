import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id?: string): Promise<Billboard> => {
  // If an ID is provided, fetch the billboard by ID
  if (id) {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
  } else {
    // If no ID is provided, fetch the default billboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/default`);
    return res.json();
  }
};

export default getBillboard;
