import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toggle = ({theme, toggleTheme}) => {
    console.log(theme)
    return (
        <button className="app__dark-mode-btn icon level-right" onClick={toggleTheme}>
          <FontAwesomeIcon color={theme === 'dark' ? "#FFA500" : ""} icon={theme === 'light' ? faMoon : faSun} />
        </button>
    )
}
