import React from "react";
import { useSnackbar as useHooks } from "notistack";
import { useHistory } from "react-router-dom";

//  styled components
import { ActionButtons, CloseButton } from "./styles";

export const useSnackbar = props => {
  //  hooks
  const { enqueueSnackbar } = useHooks();
  const history = useHistory();

  /** @description Errorメッセージを表示 */
  const errorMessage = React.useCallback(
    (message, error, options) => {
      if (error?.isAxiosError) {
        const axiosError = error;
        let errorMessage;
        switch (axiosError.response?.status) {
          //  Corsエラー等
          case undefined:
            history.push("/login");
            errorMessage = "Network Error";
            enqueueSnackbar(errorMessage, {
              ...options,
              variant: "error",
              action: CloseButton,
              preventDuplicate: true
            });
            break;

          //  401 Unauthorized
          case 401:
            history.push("/login");
            errorMessage = "認証エラーが発生しました。";
            enqueueSnackbar(errorMessage, {
              ...options,
              variant: "warning",
              action: CloseButton,
              preventDuplicate: true
            });
            break;

          default:
            errorMessage =
              "\nMessage : " + axiosError.response?.data?.message || "";
            enqueueSnackbar(`${message}${errorMessage}`, {
              ...options,
              variant: "error",
              preventDuplicate: true,
              action: CloseButton,
              autoHideDuration: 6000
            });
        }
      } else {
        enqueueSnackbar(message, {
          ...options,
          variant: "error",
          preventDuplicate: true
        });
      }
    },
    [enqueueSnackbar, history]
  );

  /** @description Successメッセージを表示 */
  const successMessage = React.useCallback(
    (message, options) => {
      enqueueSnackbar(message, {
        ...options,
        variant: "success"
      });
    },
    [enqueueSnackbar]
  );

  /** @description Infoメッセージを表示 */
  const infoMessage = React.useCallback(
    (message, options) => {
      enqueueSnackbar(message, {
        ...options,
        variant: "info"
      });
    },
    [enqueueSnackbar]
  );

  /** @description Warningメッセージを表示 */
  const warningMessage = React.useCallback(
    (message, options) => {
      enqueueSnackbar(message, {
        ...options,
        variant: "warning"
      });
    },
    [enqueueSnackbar]
  );

  /** @description Errorメッセージの表示とHomeとServicesに遷移できるボタンを付与 */
  const errorMessageWithAction = (message, error, options) => {
    enqueueSnackbar(message, {
      ...options,
      variant: "error",
      action: ActionButtons
    });
  };

  return {
    errorMessage,
    errorMessageWithAction,
    successMessage,
    infoMessage,
    warningMessage
  };
};
