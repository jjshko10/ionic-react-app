import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './HomeContainer.css';

export const HomeContainer: React.FC = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/content')
  }

  return (
    <div className="container">
      <IonButton onClick={clickHandler}>Fetch Data</IonButton>
    </div>
  );
};