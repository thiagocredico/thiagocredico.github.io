SELECT
	S.song_name AS 'cancao',
	COUNT(*) AS 'reproducoes'
FROM
	SpotifyClone.songs S
	INNER JOIN SpotifyClone.histories H ON H.song_id = S.song_id
GROUP BY
	S.song_name
ORDER BY
	reproducoes DESC,
	cancao
LIMIT
	2;