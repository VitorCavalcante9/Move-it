import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1355631596460765188/Ru6_jjVI_400x400.jpg" alt="Mio-chan"/>
            <div>
                <strong>Vitor Cavalcante</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}