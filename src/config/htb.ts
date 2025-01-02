// Este archivo ya no se usa directamente para las peticiones API
// Las peticiones se manejan a través del backend
export const HTB_CONFIG = {
  ENDPOINTS: {
    USER_ACTIVITY: '/api/user-activity'
  }
} as const;

export const getHeaders = (token: string) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});