import styles from "./MovieCard.module.css";

export const MovieCard = ({
    poster,
    title,
    releaseDate,
    duration,
    maturity,
    genres,
    director,
    mainActors,
    plot,
    metascore,
    rating
}) => {
    return (
        <div className={styles.MovieCard}>
            <img src={poster} alt="" />
            <div className={styles.info}>
                <h2>{title}</h2>
                <p className={styles.textMuted}>{releaseDate} | {duration} | {maturity} | {genres}</p>
                <p>
                    <i className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <polygon points="16,1 19,10 28,10 21,16 24,25 16,20 8,25 11,16 4,10 13,10" fill="yellow" />
</svg>

                    </i>{rating} rate | <span className={metascore >= 60 ? styles.msGreen : metascore >=50 ? styles.msYellow : styles.msRed}>{metascore}</span> Metascore</p>
                <h3 className={styles.actors}>{director} | {mainActors.join(', ')}</h3>
                <p>{plot}</p>
            </div>
        </div>
    );
}