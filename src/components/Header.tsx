import React from 'react';
import {  Link,  useRouteMatch } from 'react-router-dom';
import { Button } from './Button';
import './header.css';

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onSubmit: () => void;
}

export const MainHeader: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onSubmit}) => {
  const { path } = useRouteMatch();
return(
  <header>
    <div className="wrapper">
      <div>
        
        <h1>Create Lesson</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Cancel" />
        ) : (
          <>
            <Link to="/"><Button size="large" onClick={onLogin} label="Cancel" /></Link>
            {path==="/submit"?
            <Link to="/final"><Button primary size="large" onClick={onSubmit} label="Submit" /></Link>
            :
            <Link to="/submit"><Button primary size="large" onClick={onSubmit} label="Submit" /></Link>
            }
          </>
        )}
      </div>
    </div>
  </header>
);
};
