// src/utils/Notification.js
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    popup: 'rounded-xl shadow-lg',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

const notify = {
  success: (message = 'Operation successful!') =>
    Toast.fire({
      icon: 'success',
      title: message,
      background: '#1e1b4b', // fuchsia-950 equivalent
      color: '#f5d0fe',      // fuchsia-200 equivalent
    }),

  error: (message = 'Something went wrong!') =>
    Toast.fire({
      icon: 'error',
      title: message,
      background: '#1e1b4b',
      color: '#fecaca', // red-200
    }),

  info: (message = 'Here is some info.') =>
    Toast.fire({
      icon: 'info',
      title: message,
      background: '#1e1b4b',
      color: '#bae6fd', // blue-200
    }),

  warning: (message = 'Be careful!') =>
    Toast.fire({
      icon: 'warning',
      title: message,
      background: '#1e1b4b',
      color: '#fde68a', // yellow-200
    }),
}

export default notify
