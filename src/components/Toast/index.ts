import { ToastContainer } from 'react-toastify';

import styled from 'styled-components';

export const Toast = styled(ToastContainer).attrs(props => ({
  ...props,
  position: 'top-right',
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    borderRadius: 10,
    fontFamily: 'Roboto, Sans Serif',
    fontSize: 14
  }
}))``;
