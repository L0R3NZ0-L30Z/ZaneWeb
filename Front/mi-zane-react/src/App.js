import React from 'react';
import { AuthProvider } from './components/AuthContext'; // Importa el AuthProvider
import ReviewsComponent from './components/ReviewsComponent';
import SubmitReviewComponent from './components/SubmitReviewComponent';
import UserCounter from './components/UserCounter';
import View from './components/View';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <View />
        <UserCounter />
        <SubmitReviewComponent />
        <ReviewsComponent />
      </div>
    </AuthProvider>
  );
};

export default App;