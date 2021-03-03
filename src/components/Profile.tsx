import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1355631596460765188/Ru6_jjVI_400x400.jpg" alt="Mio-chan"/>
            <div>
                <strong>Vitor Cavalcante</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}