import {  IonContent, IonPage } from '@ionic/react';
import { HomeContainer } from '../components/HomeContainer';

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};