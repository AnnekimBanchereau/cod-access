import {
  FETCH_THEMES_EXERCISES,
  setThemesExercises,
  setExercisesPageLoading,
  FETCH_EXERCISE,
  setCurrentExercise,
} from 'src/actions/exercises';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES_EXERCISES:
      try {
        store.dispatch(setExercisesPageLoading(true));
        const response = await axiosInstance.get('/themes_exercises');
        console.log(response);
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setThemesExercises(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setExercisesPageLoading(false));
      }
      return next(action);
    case FETCH_EXERCISE:
      try {
        const { status, data } = await axiosInstance.get(`/exercises/dragndrop/${action.exerciseId}`); // sanitize ?

        if (status !== 200) {
          throw new Error();
        }

        const currentExercise = {
          loading: false,
          id: data.id,
          title: data.title,
          brief: data.brief,
          themes: data.themes,
          questions: data.questions,
        };

        console.log(currentExercise);

        store.dispatch(setCurrentExercise(currentExercise));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        // store.dispatch(setExercisesPageLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};