import {create} from 'zustand';

export const useCardStore = create(set => {
  return {
    cardsInfo: [
      {
        creditCardNumber: '4242 4242 4242 4242',
        creditCardName: 'Lorem Epsum',
        date: '05/227/590',
      },
    ],
    addCardInfo: function (newCardInfo) {
      const newData = set(function (state) {
        return {cardsInfo: [newCardInfo, ...state.cardsInfo]};
      });
      return newData;
    },
    updateCardInfo: function (newCardInfo, index) {
      const updatedData = set(function (state) {
        const data = [...state.cardsInfo];
        data[index] = newCardInfo;
        return {cardsInfo: data};
      });
      return updatedData;
    },
  };
});
