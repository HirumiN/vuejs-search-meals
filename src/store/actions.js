import axiosCLient from '../axiosClient';
export function searchMeals({commit}, keyword){
  axiosCLient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
      // debugger;
      commit('setSearchedMeals', data.meals)
    })
}