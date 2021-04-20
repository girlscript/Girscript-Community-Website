import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../images/Gs_icon.png';
import './404.css'

class NotFoundPage extends React.Component{
    render(){
        return (
        <div className="container">
            <img className="logo" src={PageNotFound} />
            <h2>Somthing is wrong!!</h2>
            <h4>The page you are looking for was moved, removed,renamed or might never existed.</h4>
            <div className="back">
            <button>
              <Link className="link" to="/">Go to Home </Link>
            </button>
            </div>
          </div>
        );
    }
}
export default NotFoundPage;