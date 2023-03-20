import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Select from 'react-dropdown-select';
import styled from '@emotion/styled';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //refetchOnWindowFocus : false,
      retry: 2,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
    }
  }
});

export const ReactDropDownSelectStyled = styled(Select)`
background: #fff;
color : '#333';
border : 0;
padding : 0.5rem 0;
box-shadow : none !important;
border-radius : 0px; 

:hover{
  border-bottom: 1px solid #113B75;
}
:focus{
  border-bottom: 1px solid #113B75;
}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer />
    </QueryClientProvider>
  );
}
