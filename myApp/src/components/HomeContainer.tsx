import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './HomeContainer.css';

interface ContainerProps { }

export const HomeContainer: React.FC<ContainerProps> = () => {
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