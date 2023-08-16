SELECT 
    A.artist_name AS 'artista',
    AB.album_name AS 'album',
    COUNT(F.user_id) AS 'pessoas_seguidoras'
FROM 
    SpotifyClone.artists A
    INNER JOIN SpotifyClone.albums AB ON AB.artist_id = A.artist_id
    INNER JOIN SpotifyClone.followers F ON F.artist_id = A.artist_id
GROUP BY 
    A.artist_name, 
    AB.album_name
ORDER BY 
    pessoas_seguidoras DESC,
    artista,
    album;