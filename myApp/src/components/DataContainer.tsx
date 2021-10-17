import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

export const DataContainer: React.FC = () => {
  const [cards, setCards]:any = useState([]);

  useEffect(() => {
    const request = async() => {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200');
      let data = await response.json();
      setCards(data.results);
    }

    request();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle className="title">Requested Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {cards.map((element:any) => {
          return (
            <div key={element.url}>
              <span>{element.name}</span>
            </div>
          )
        })}
      </IonContent>
    </IonPage>
  );
};
