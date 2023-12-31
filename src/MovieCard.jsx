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
            <div className={styles.cardImage}>
                <img src={poster} alt="" />
            </div>
            <div className={styles.info}>
                <h2>{title}</h2>
                <p className={styles.textMuted}>{releaseDate} | {duration} | {maturity} | {genres}</p>
                <p>
                    <b className={styles.icon}>
                    ★
                    </b>{rating} rate | <span className={metascore >= 60 ? styles.msGreen : metascore >=50 ? styles.msYellow : styles.msRed}>{metascore}</span> Metascore</p>
                <h3 className={styles.actors}>{director} | {mainActors.join(', ')}</h3>
                <p>{plot}</p>
            </div>
        </div>
    );
}