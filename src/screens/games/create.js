import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import Input from '../../components/forms/Input';
import BadgeInput from '../../components/forms/BadgeInput';
import DateInput from '../../components/forms/DateInput';
import { apiPost } from '../../helpers/api';

const CreateGame = () => {
    const [formValues, setFormValues] = useState({});
    const [displayError, setDisplayError] = useState(false);
    const inputProps = {values: formValues, setValues: setFormValues};
    const history = useHistory();
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await apiPost('/games', formValues);
        history.push('/game');
        }catch(e) {
          setDisplayError(true); 
        }
    };

    if (displayError) {
      return (
        <div className="alert alert-danger" role="alert">
          An error occurred. Try again later. <Link to="/">Home</Link>
        </div>
      )
    }
      
    return (
        <div className="container">
          <h2>Create Game</h2>
          <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
            <div className="row">
                <Input {...inputProps} label="Title" name="title" />
            </div>

            <div className="row">
              <BadgeInput {...inputProps} label="Other Titles" name="otherTitles" />
            </div>
    
            <div className="row">
                <BadgeInput {...inputProps} label="Publishers" name="publishers" className="col-md-4 mb-3" />
                <BadgeInput {...inputProps} label="Developers" name="developers" className="col-md-4 mb-3" />
                <BadgeInput {...inputProps} label="Genres" name="genres" className="col-md-4 mb-3" />
            </div>

            <div className="row">
                <DateInput {...inputProps} label="First Released" name="firstReleased" />
                <DateInput {...inputProps} label="USA Release" name="usaRelease" />
                <DateInput {...inputProps} label="Japan Release" name="japanRelease" />
                <DateInput {...inputProps} label="Euro Released" name="euroReleased" />
            </div>
    
            <hr className="mb-4" />
            <div className="d-flex justify-content-between">
              <Link to="/game" className="btn btn-outline-secondary btn-sm">
                Back
              </Link>
              <button className="btn btn-primary btn-sm" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
    );
};
    
export default CreateGame;