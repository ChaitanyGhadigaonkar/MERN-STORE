import {Toaster} from "react-hot-toast"

const Toast = () => {
  return (
    <Toaster
        position="top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#0053a6",
            },
          },
          error: {
            iconTheme: {
              primary: "#0053a6",
            },
          },
        }}
      />
  )
}

export default Toast
