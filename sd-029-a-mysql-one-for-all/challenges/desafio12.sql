SELECT
    A.artist_name AS 'artista',
    CASE
        WHEN COUNT(S.song_name) BETWEEN 1 AND 2 
        THEN 'C'
        WHEN COUNT(S.song_name) BETWEEN 3 AND 4 
        THEN 'B'
        WHEN COUNT(S.song_name) > 4 
        THEN 'A'
        ELSE '-'
    END AS 'ranking'
FROM 
	SpotifyClone.favorites F
    INNER JOIN SpotifyClone.songs S ON S.song_id = F.song_id
    INNER JOIN SpotifyClone.albums AB ON AB.album_id = S.album_id
    RIGHT JOIN SpotifyClone.artists A ON A.artist_id = AB.artist_id
GROUP BY 
    artista
ORDER BY 
    COUNT(S.song_id) DESC,
    artista;
