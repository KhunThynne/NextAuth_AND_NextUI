export type AlertType = "success" | "danger" | "warning" | "info" | "";

export interface AlertState {
  message: string;
  type: AlertType;
}

export interface AlertContextProps {
  alert: AlertState;
  showAlert: (message: string, type?: AlertType) => void;
  hideAlert: () => void;
}
