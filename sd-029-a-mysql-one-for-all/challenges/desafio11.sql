SELECT
    A.album_name AS album,
    COUNT(F.song_id) AS favoritadas
FROM
    SpotifyClone.songs S
    INNER JOIN SpotifyClone.favorites F ON F.song_id = S.song_id
    INNER JOIN SpotifyClone.albums A ON A.album_id = S.album_id
GROUP BY
    album
ORDER BY
    favoritadas DESC,
    album
LIMIT
    3;
    