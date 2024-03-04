import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
} from "./ui/alert-dialog";
import { Alert, AlertDescription } from "./ui/alert";

const AlertComponent = (props) => {
  return (
    <AlertDialog open={props.alertOpen}>
      <AlertDialogContent onEscapeKeyDown={() => props.setAlertOpen(false)}>
        <AlertDescription className="text-center font-semibold">
          {props.alertMessage}
        </AlertDescription>
        <AlertDialogAction onClick={() => props.setAlertOpen(false)}>
          Okay
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertComponent;
