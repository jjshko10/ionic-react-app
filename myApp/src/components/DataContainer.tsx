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

interface ICard {
  name: string;
  url: string;
}

export const DataContainer: React.FC = () => {
  const [cards, setCards] = useState<Array<ICard>>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const request = async() => {
      try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200');
        let data = await response.json();
        setCards(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }  
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
        {loading ? <h1>Loading...</h1> : cards.map((element:ICard) => {
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