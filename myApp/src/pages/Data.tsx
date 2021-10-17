import {
  IonContent,
  IonPage,
} from "@ionic/react";
import { DataContainer } from "../components/DataContainer";

export const Data: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <DataContainer />
      </IonContent>
    </IonPage>
  );
};