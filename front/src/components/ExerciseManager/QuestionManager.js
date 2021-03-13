import React from 'react';
import PropTypes from 'prop-types';

import AnswerManager from 'src/containers/ExerciseManager/AnswerManager';
import { returnFileSize } from 'src/utils';
import TextField from './TextField';
import './styles.scss';

const QuestionManager = ({
  id,
  brief,
  code,
  explanation,
  selectedFile,
  imageAlternative,
  possibleAnswers,
  questionNumber,
  changeValue,
  removeQuestion,
  createAnswer,
  saveOnBlur,
  isSaved,
  sendImageFile,
  changeSelectedFile,
  saveAltOnBlur,
  imageId,
}) => {
  const handleImageChange = (evt) => {
    evt.preventDefault();
    changeSelectedFile(evt.target.files[0]);
  };

  const handleImageOnBlur = () => {
    if (selectedFile && !isSaved) console.log('bingo', selectedFile);
    if (selectedFile && !isSaved) sendImageFile({
      questionId: id,
      file: selectedFile,
    });
  };

  const handleImageAltOnBlur = () => {
    if (!isSaved) saveAltOnBlur(imageId);
  };

  return (
    <article className="admin-exercise__question">
      <fieldset>
        <legend>
          <h2 className="admin-exercise__question__heading">Question {questionNumber}</h2>
        </legend>
        <button type="button" onClick={removeQuestion}>
          Supprimer
        <span className="sr-only">Question {questionNumber}</span>
        </button>
        <div className="admin-exercise__question__general-info">
          <TextField
            className="admin-exercise__question__general-info__field-group"
            id={`exercise-q${questionNumber}-brief`}
            label="Brief"
            type="textarea"
            autocomplete="off"
            name="brief"
            value={brief}
            changeValue={changeValue}
            isSaved={isSaved}
            saveOnBlur={saveOnBlur}
          />

          <label
            className="admin-exercise__question__general-info__upload__label"
            htmlFor={`exercise-q${questionNumber}-upload`}
          >
            Télécharger une image
          </label>
          <input
            className="admin-exercise__question__general-info__upload__input"
            id={`exercise-q${questionNumber}-upload`}
            type="file"
            onChange={handleImageChange}
            value=""
            accept="image/*"
            onBlur={handleImageOnBlur}
          />
          <div className="admin-exercise__question__general-info__upload__preview">
            {
              selectedFile === null
                ? (
                  <p>Aucun fichier selectionné</p>
                )
                : (
                  <>
                    <p>Nom : {selectedFile.name}</p>
                    <p>Taille : {returnFileSize(selectedFile.size)}</p>
                    {
                      selectedFile.type.substring(0, 5) === 'image'
                        ? <p>Format : {selectedFile.type}, {selectedFile.type.substring(0, 5)}</p>
                        : <p>Le document sélectionné n'est pas une image, veuillez réessayer.</p>
                    }
                    <img src={window.URL.createObjectURL(selectedFile)} alt="" />
                    <TextField
                      className="admin-exercise__question__general-info__field-group"
                      id={`exercise-q${questionNumber}-alternative`}
                      label="Alternative de l'image (attribut alt)"
                      type="text"
                      autocomplete="off"
                      name="imageAlternative"
                      value={imageAlternative}
                      changeValue={changeValue}
                      isSaved={isSaved}
                      saveOnBlur={handleImageAltOnBlur}
                    />
                  </>
                )
            }
          </div>

          <TextField
            className="admin-exercise__question__general-info__field-group"
            id={`exercise-q${questionNumber}-code`}
            label="Code"
            type="textarea"
            autocomplete="off"
            name="code"
            value={code}
            changeValue={changeValue}
            isSaved={isSaved}
            saveOnBlur={saveOnBlur}
          />
        </div>

        <fieldset className="admin-exercise__question__answers">
          <legend>
            <h3 className="admin-exercise__question__answers__heading">
              <span className="sr-only">Question {questionNumber} -</span> Réponses possibles
          </h3>
          </legend>
          {
            possibleAnswers.map((answer, index) => (
              <AnswerManager
                questionId={id}
                id={answer.id}
                questionNumber={questionNumber}
                answerNumber={index + 1}
                key={answer.id}
              />
            ))
          }

          <button
            className="admin-exercise__question__answers__btn-add"
            type="button"
            onClick={createAnswer}
          >
            Ajouter une réponse supplémentaire
        </button>

          <TextField
            className="admin-exercise__question__general-info__field-group"
            id={`exercise-q${questionNumber}-explanation`}
            label="Explication de la correction"
            type="textarea"
            autocomplete="off"
            name="explanation"
            value={explanation}
            changeValue={changeValue}
            isSaved={isSaved}
            saveOnBlur={saveOnBlur}
          />
        </fieldset>
      </fieldset>
    </article>
  );
};

QuestionManager.propTypes = {
  id: PropTypes.number.isRequired,
  brief: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  // picturePath: PropTypes.string.isRequired,
  possibleAnswers: PropTypes.array.isRequired,
  questionNumber: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  createAnswer: PropTypes.func.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default QuestionManager;
