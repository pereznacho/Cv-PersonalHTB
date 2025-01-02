import { Machine } from '../types/htb';

// Función para obtener los datos de HackTheBox
export async function fetchHtbMachines(): Promise<{ machines: Machine[] }> {
  try {
    const response = await fetch('/.netlify/functions/htb');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching HTB machines:', error);
    throw error;
  }
}